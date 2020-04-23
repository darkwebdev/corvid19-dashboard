import React, { FC, useState } from 'react';

import { Country } from '../Summary';
import HeaderButton from './HeaderButton';
import { headers } from './headers';
import { Column, HealhyColumn, SickColumn, DeadColumn, HeaderColumn } from './Column';
import { Link } from '@reach/router';

type Props = {
  countries: Country[];
}

export type Sorting = keyof Country;

const Table: FC<Props> = ({ countries = [] }) => {
  const [sorting, setSorting] = useState<Sorting>('TotalConfirmed');

  const sortedCountries = countries.sort((country1, country2) =>
    // @ts-ignore
    (country2[sorting] - country1[sorting]));

  return <table style={{ borderSpacing: 0 }}>
    <thead>
    <tr>
      <HeaderColumn width="18ch" align="left">Country</HeaderColumn>
      <HeaderColumn colSpan={3} className="sick">Sick</HeaderColumn>
      <HeaderColumn colSpan={3} className="healthy">Recovered</HeaderColumn>
      <HeaderColumn colSpan={3} className="dead">Dead</HeaderColumn>
    </tr>
    <tr>
      <HeaderColumn />
      {headers.map(({ hint, key, className, text }) =>
        <HeaderColumn className={className} key={key}>
          <HeaderButton
            hint={hint}
            active={sorting === key}
            onClick={() => setSorting(key)}
          >{text}</HeaderButton>
        </HeaderColumn>
      )}
    </tr>
    </thead>
    <tbody>
      {sortedCountries.map(({
        Country,
        Slug,
        TotalConfirmed, TotalConfirmedPercent, NewConfirmed,
        TotalRecovered, TotalRecoveredPercent, NewRecovered,
        TotalDeaths, TotalDeathsPercent, NewDeaths
      }, i) =>
        <tr key={i}>
          <Column><Link to={`/covid19-dashboard/country/${Slug}`}>{Country}</Link></Column>
          <SickColumn align="right">{TotalConfirmed.toLocaleString()}</SickColumn>
          <SickColumn align="center">{TotalConfirmedPercent}</SickColumn>
          <SickColumn>{NewConfirmed ? `+${NewConfirmed.toLocaleString()}` : ''}</SickColumn>
          <HealhyColumn align="right">{TotalRecovered.toLocaleString()}</HealhyColumn>
          <HealhyColumn align="center">{TotalRecoveredPercent}</HealhyColumn>
          <HealhyColumn>{NewRecovered ? `+${NewRecovered.toLocaleString()}` : ''}</HealhyColumn>
          <DeadColumn align="right">{TotalDeaths.toLocaleString()}</DeadColumn>
          <DeadColumn align="center">{TotalDeathsPercent}</DeadColumn>
          <DeadColumn>{NewDeaths ? `+${NewDeaths.toLocaleString()}` : ''}</DeadColumn>
        </tr>
      )}
    </tbody>
  </table>;
};

export default Table;
