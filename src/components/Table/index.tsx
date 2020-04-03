import React, { FC, useState } from 'react';
import { Country } from '../Summary';
import { colors } from '../const';
import HeaderButton from './HeaderButton';
import { headers } from './headers';

type Props = {
  countries: Country[];
}

export type Sorting = keyof Country;

const Index: FC<Props> = ({ countries = [] }) => {
  const [sorting, setSorting] = useState<Sorting>('TotalConfirmed');

  const sortedCountries = countries.sort((country1, country2) =>
    // @ts-ignore
    (country2[sorting] - country1[sorting]));

  return <table>
    <thead>
    <tr>
      <th style={{ width: '18ch' }}>Country</th>
      <th colSpan={3} style={{ background: colors.sickLight }}>Sick</th>
      <th colSpan={3} style={{ background: colors.healthyLight }}>Recovered</th>
      <th colSpan={3} style={{ background: colors.deadLight }}>Dead</th>
    </tr>
    <tr>
      <th />
      {headers.map(({ hint, key, bg, text }) =>
        <th style={{ background: bg }} key={key}>
          <HeaderButton
            hint={hint}
            active={sorting === key}
            onClick={() => setSorting(key)}
          >{text}</HeaderButton>
        </th>
      )}
    </tr>
    </thead>
    <tbody>
      {sortedCountries.map(({
        Country,
        TotalConfirmed, TotalConfirmedPercent, NewConfirmed,
        TotalRecovered, TotalRecoveredPercent, NewRecovered,
        TotalDeaths, TotalDeathsPercent, NewDeaths
      }, i) =>
        <tr key={i}>
          <td>{Country}</td>
          <td style={{ background: colors.sickLight }}>{TotalConfirmed}</td>
          <td style={{ background: colors.sickLight }}>{TotalConfirmedPercent}</td>
          <td style={{ background: colors.sickLight }}>{NewConfirmed ? `+${NewConfirmed}` : ''}</td>
          <td style={{ background: colors.healthyLight }}>{TotalRecovered}</td>
          <td style={{ background: colors.healthyLight }}>{TotalRecoveredPercent}</td>
          <td style={{ background: colors.healthyLight }}>{NewRecovered ? `+${NewRecovered}` : ''}</td>
          <td style={{ background: colors.deadLight }}>{TotalDeaths}</td>
          <td style={{ background: colors.deadLight }}>{TotalDeathsPercent}</td>
          <td style={{ background: colors.deadLight }}>{NewDeaths ? `+${NewDeaths}` : ''}</td>
        </tr>
      )}
    </tbody>
  </table>;
};

export default Index;
