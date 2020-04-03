import React, { FC, useState } from 'react';

import useMobile from '../../useMobile';
import { colors } from '../../const';
import { Country } from '../Summary';
import HeaderButton from './HeaderButton';
import { headers } from './headers';
import { Column, HealhyColumn, SickColumn, DeadColumn, HeaderColumn } from './Column';

type Props = {
  countries: Country[];
}

export type Sorting = keyof Country;

const Index: FC<Props> = ({ countries = [] }) => {
  const [sorting, setSorting] = useState<Sorting>('TotalConfirmed');
  const isMobile = useMobile();

  const sortedCountries = countries.sort((country1, country2) =>
    // @ts-ignore
    (country2[sorting] - country1[sorting]));

  return <table style={{ borderSpacing: 0 }}>
    <thead>
    <tr>
      <HeaderColumn width="18ch" sticky={isMobile} align="left">Country</HeaderColumn>
      <HeaderColumn colSpan={3} color={colors.sickLight}>Sick</HeaderColumn>
      <HeaderColumn colSpan={3} color={colors.healthyLight}>Recovered</HeaderColumn>
      <HeaderColumn colSpan={3} color={colors.deadLight}>Dead</HeaderColumn>
    </tr>
    <tr>
      <HeaderColumn sticky={isMobile} />
      {headers.map(({ hint, key, bg, text }) =>
        <HeaderColumn color={bg} key={key}>
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
        TotalConfirmed, TotalConfirmedPercent, NewConfirmed,
        TotalRecovered, TotalRecoveredPercent, NewRecovered,
        TotalDeaths, TotalDeathsPercent, NewDeaths
      }, i) =>
        <tr key={i}>
          <Column sticky={isMobile}>{Country}</Column>
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

export default Index;
