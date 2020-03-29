import { hot } from 'react-hot-loader/root';
import React, { FC, useEffect, useState } from 'react';
import Table from './Table';
import MapChart from './MapChart';
import { codes, ignored } from './countries';

export type Country = {
  Country: string;
  Slug: string;
  IsoA2?: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  TotalDeathsPercent?: number;
  NewRecovered: number;
  TotalRecovered: number;
}

type Summary = {
  Countries: Country[];
  Date: string;
}

const Summary: FC = () => {
  const [summary, setSummary] = useState<Summary|undefined>();
  const [error, setError] = useState<string|undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(setSummary)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredCountries = !summary ? [] : summary.Countries.filter(({ Country, TotalConfirmed }) =>
    !ignored.includes(Country) && TotalConfirmed);

  const enrichedCountries = filteredCountries.map(country => ({
    ...country,
    IsoA2: isoA2(country.Slug, country.Country),
    TotalDeathsPercent: country.TotalConfirmed === 0 ? 0 : Math.round((country.TotalDeaths * 100) / country.TotalConfirmed * 10) / 10
  }));

  const mapDataSick = enrichedCountries.map(({ IsoA2, TotalConfirmed }) => ({ 'iso-a2': IsoA2, value: TotalConfirmed }));
  const mapDataDead = enrichedCountries.map(({ IsoA2, TotalDeathsPercent }) => ({ 'iso-a2': IsoA2, value: TotalDeathsPercent }));

  return <>
    <h2>Summary</h2>
    {loading && <p>Loading data...</p>}
    {summary && <>
      <p>Last update: {`${new Date(summary.Date).toLocaleString()}`}</p>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Table countries={enrichedCountries} />
        <section>
          <MapChart title="Sick, ppl" data={mapDataSick} />
          <MapChart title="Dead, % of Sick" data={mapDataDead} valueSuffix='%'/>
        </section>
      </div>
    </>}
    {error && <p>{error}</p>}
  </>;
};

const isoA2 = (countrySlug: string, countryName: string) => {
  const countryCode = codes.find(({ slug, name}) => name === countryName || slug === countrySlug);

  if (!countryCode) {
    console.error('Country code not found for', countrySlug, countryName);
    return '??';
  }

  return countryCode.alpha2;
};

export default hot(Summary);
