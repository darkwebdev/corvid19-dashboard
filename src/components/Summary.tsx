import { hot } from 'react-hot-loader/root';
import React, { FC, lazy, useEffect, useState, Suspense, useReducer } from 'react';

import { colors } from '../const';
import { hoursSince } from '../utils';
import { ignored } from '../data/ignored';
import isoA2 from '../data/codes';
import countryPopulation from '../data/population';
import useMobile from '../useMobile';
import Table from './Table';
import Tabs from './Tabs';
import Chart, { CountryData } from './Chart';
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

type CountryDay = {
  Country: string;
  Date: string;
  Cases: number;
}

type Summary = {
  Countries: Country[];
  Date: string;
}

const Summary: FC = () => {
  const [summary, setSummary] = useState<Summary|undefined>();
  const [error, setError] = useState<string|undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [tableVisible, setTableVisible] = useState<boolean>(true);
  const [mapsVisible, setMapsVisible] = useState<boolean>(false);
  const [chartsVisible, setChartsVisible] = useState<boolean>(false);
  const [countryHistory, setCountryHistory] = useState<CountryData[]>([]);
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

  useEffect(() => {
    summary?.Countries.sort(sortBySick).slice(0, 6).forEach(({ Country, Slug }) => {
      fetch(`https://api.covid19api.com/total/country/${Slug}/status/confirmed`)
        .then(response => response.json())
        .then((days: CountryDay[]) => {
          const countryData: CountryData = {
            type: 'line',
            name: Country,
            data: days.slice(-30).map(({ Date: date, Cases }) => [
              new Date(date).getTime(),
              Cases
            ])
          };
          setCountryHistory(history => [...history, countryData]);
        })
        .catch(err => setError(String(err)))
    })
  }, [summary]);

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

  // console.log('history', countryHistory)

  const tabs = [{
    text: 'Table',
    onClick: () => { setTableVisible(true); setMapsVisible(false); setChartsVisible(false); }
  },{
    text: 'Maps',
    onClick: () => { setTableVisible(false); setMapsVisible(true); setChartsVisible(false); }
  },{
    text: 'Chart',
    onClick: () => { setTableVisible(false); setMapsVisible(false); setChartsVisible(true); }
  }];

  return <>
    {loading && <p>Loading data...</p>}
    {summary && <>
      <p>Updated {hoursSince(summary.Date)} hours ago</p>

      {isMobile && <Tabs tabs={tabs}/>}

      <div style={{ display: isMobile ? 'block' : 'flex', alignItems: 'flex-start' }}>
        {(tableVisible || !isMobile) &&
          <section style={{ overflow: 'scroll' }}>
            <Table countries={calculatedCountries} />
          </section>
        }
        <div style={{ width: isMobile ? '100%' : '50%' }}>
          {(chartsVisible || !isMobile) &&
          <section>
            <Chart title="Sick, top countries - last 30 days" data={countryHistory} />
          </section>
          }
          {(mapsVisible || !isMobile) &&
            <section>
              <Suspense fallback={<p>Loading maps...</p>}>
                <MapChart title="Sick, ppl" data={mapDataSick} color={colors.sick}/>
                <MapChart title="Sick, per 1% population" data={mapDataSickPer1} color={colors.sick}/>
                <MapChart title="Dead, % of Sick" data={mapDataDead} valueSuffix='%'/>
              </Suspense>
            </section>
          }
        </div>
      </div>
    </>}
    {error && <p>{error}</p>}
  </>;
};

const sortBySick = (country1: Country, country2: Country): number =>
  (country2['TotalConfirmed'] - country1['TotalConfirmed']);

export default hot(Summary);
