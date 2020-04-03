import { colors } from '../const';
import { Sorting } from '.';

type Header = {
  text: string;
  hint: string;
  key: Sorting;
  bg: colors;
}

export const headers: Header[] = [
  {
    text: 'Total',
    hint: 'Total Sick',
    key: 'TotalConfirmed',
    bg: colors.sickLight
  },
  {
    text: 'Per 1% pop',
    hint: 'Sick, per 1% of Population',
    key: 'TotalConfirmedPercent',
    bg: colors.sickLight
  },
  {
    text: 'New',
    hint: 'New Sick',
    key: 'NewConfirmed',
    bg: colors.sickLight
  },
  {
    text: 'Total',
    hint: 'Total Recovered',
    key: 'TotalRecovered',
    bg: colors.healthyLight
  },
  {
    text: '%',
    hint: 'Recovered, as percentage of Sick',
    key: 'TotalRecoveredPercent',
    bg: colors.healthyLight
  },
  {
    text: 'New',
    hint: 'New Recovered',
    key: 'NewRecovered',
    bg: colors.healthyLight
  },
  {
    text: 'Total',
    hint: 'Total Dead',
    key: 'TotalDeaths',
    bg: colors.deadLight
  },
  {
    text: '%',
    hint: 'Dead, as percentage of Sick',
    key: 'TotalDeathsPercent',
    bg: colors.deadLight
  },
  {
    text: 'New',
    hint: 'New Dead',
    key: 'NewDeaths',
    bg: colors.deadLight
  }
];
