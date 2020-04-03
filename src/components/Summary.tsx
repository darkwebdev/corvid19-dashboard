import { hot } from 'react-hot-loader/root';
import React, { FC, lazy, useEffect, useState, Suspense } from 'react';

import { colors } from '../const';
import { hoursSince } from '../utils';
import { ignored } from '../data/ignored';
import isoA2 from '../data/codes';
import countryPopulation from '../data/population';
import useMobile from '../useMobile';
import Table from './Table';
const MapChart = lazy(() => import(/* webpackChunkName: 'mapchart' */'./MapChart'));

export type Country = {
  Country: string;
  Slug: string;
  IsoA2?: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  TotalConfirmedPercent: number;
  NewDeaths: number;
  TotalDeaths: number;
  TotalDeathsPercent?: number;
  NewRecovered: number;
  TotalRecovered: number;
  TotalRecoveredPercent?: number;
  Population?: number;
}

type Summary = {
  Countries: Country[];
  Date: string;
}

const Summary: FC = () => {
  const [summary, setSummary] = useState<Summary|undefined>();
  const [error, setError] = useState<string|undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const isMobile = useMobile();

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
    !ignored.includes(Country) && TotalConfirmed > 100);

  const enrichedCountries = filteredCountries.map(country => ({
    ...country,
    IsoA2: isoA2(country.Slug, country.Country),
    Population: countryPopulation(country.Country)
  }));

  const calculatedCountries: Country[] = enrichedCountries.map(country => ({
    ...country,
    TotalConfirmedPercent: !country.Population ? 0 : Math.ceil((country.TotalConfirmed * 100) / country.Population * 100),
    TotalRecoveredPercent: !country.TotalConfirmed ? 0 : Math.ceil((country.TotalRecovered * 100) / country.TotalConfirmed * 10) / 10,
    TotalDeathsPercent: !country.TotalConfirmed ? 0 : Math.round((country.TotalDeaths * 100) / country.TotalConfirmed * 10) / 10,
  }));

  const mapDataSick = calculatedCountries.map(({ IsoA2, TotalConfirmed }) => ({ 'iso-a2': IsoA2, value: TotalConfirmed }));
  const mapDataSickPer1 = calculatedCountries.map(({ IsoA2, TotalConfirmedPercent }) => ({ 'iso-a2': IsoA2, value: TotalConfirmedPercent }));
  const mapDataDead = calculatedCountries.map(({ IsoA2, TotalDeathsPercent }) => ({ 'iso-a2': IsoA2, value: TotalDeathsPercent }));

  return <>
    {loading && <p>Loading data...</p>}
    {summary && <>
      <p>Updated {hoursSince(summary.Date)} hours ago</p>
      <div style={{ display: isMobile ? 'block' : 'flex', alignItems: 'flex-start' }}>
        <section style={{ overflow: 'scroll' }}>
          <Table countries={calculatedCountries} />
        </section>
        <section>
          <Suspense fallback={<p>Loading maps...</p>}>
            <MapChart title="Sick, ppl" data={mapDataSick} color={colors.sick} />
            <MapChart title="Sick, per 1% population" data={mapDataSickPer1} color={colors.sick} />
            <MapChart title="Dead, % of Sick" data={mapDataDead} valueSuffix='%'/>
          </Suspense>
        </section>
      </div>
    </>}
    {error && <p>{error}</p>}
  </>;
};

export default hot(Summary);
