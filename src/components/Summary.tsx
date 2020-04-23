import React, { FC, lazy, useState, Suspense } from 'react';

import { colors } from '../const';
import countryPopulation from '../data/population';
import useMobile from '../hooks/useMobile';
import Table from './Table';
import Tabs from './Tabs';
import Chart from './Chart';
import useSummary from '../hooks/useSummary';
import useTopCountriesHistory from '../hooks/useTopCountriesHistory';
// import MapChart from './MapChart';
const MapChart = lazy(() => import(/* webpackChunkName: 'mapchart' */'./MapChart'));

export type Country = {
  Country: string;
  Slug: string;
  CountryCode: string;
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

const Summary: FC = () => {
  const [error, setError] = useState<string|undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [tableVisible, setTableVisible] = useState<boolean>(true);
  const [mapsVisible, setMapsVisible] = useState<boolean>(false);
  const [chartsVisible, setChartsVisible] = useState<boolean>(false);

  const isMobile = useMobile();
  const summary = useSummary(e => { setError(String(e)); }, () => { setLoading(false); });
  const topCountriesHistory = useTopCountriesHistory(summary, e => { setError(String(e)); });

  const filteredCountries = !summary ? [] : summary.Countries.filter(({ TotalConfirmed }) =>
    TotalConfirmed > 100);

  const enrichedCountries = filteredCountries.map(country => ({
    ...country,
    Population: countryPopulation[country.Country]
  }));

  const calculatedCountries: Country[] = enrichedCountries.map(country => ({
    ...country,
    TotalConfirmedPercent: !country.Population ? 0 : Math.ceil((country.TotalConfirmed * 100) / country.Population * 100),
    TotalRecoveredPercent: !country.TotalConfirmed ? 0 : Math.ceil((country.TotalRecovered * 100) / country.TotalConfirmed * 10) / 10,
    TotalDeathsPercent: !country.TotalConfirmed ? 0 : Math.round((country.TotalDeaths * 100) / country.TotalConfirmed * 10) / 10,
  }));

  const mapDataSick = calculatedCountries.map(({ CountryCode, TotalConfirmed }) => ({ code: CountryCode, value: TotalConfirmed }));
  const mapDataSickPer1 = calculatedCountries.map(({ CountryCode, TotalConfirmedPercent }) => ({ code: CountryCode, value: TotalConfirmedPercent }));
  const mapDataDead = calculatedCountries.map(({ CountryCode, TotalDeathsPercent }) => ({ code: CountryCode, value: TotalDeathsPercent }));

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
            <Chart title="Sick, top countries - last 30 days" data={topCountriesHistory} />
          </section>
          }
          {(mapsVisible || !isMobile) &&
            <section>
              <Suspense fallback={<p>Loading maps...</p>}>
                <MapChart title="Sick, ppl" data={mapDataSick} color={colors.sick}/>
                <MapChart title="Sick, per 1% population" data={mapDataSickPer1} color={colors.sick} colorAxisMax={30}/>
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

export default Summary;
