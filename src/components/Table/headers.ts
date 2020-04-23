import { colors } from '../../const';
import { Sorting } from '.';

type Header = {
  text: string;
  hint: string;
  key: Sorting;
  className: "sick" | "healthy" | "dead";
}

export const headers: Header[] = [
  {
    text: 'Total',
    hint: 'Total Sick',
    key: 'TotalConfirmed',
    className: "sick"
  },
  {
    text: 'Per 1% pop',
    hint: 'Sick, per 1% of Population',
    key: 'TotalConfirmedPercent',
    className: "sick"
  },
  {
    text: 'New',
    hint: 'New Sick',
    key: 'NewConfirmed',
    className: "sick"
  },
  {
    text: 'Total',
    hint: 'Total Recovered',
    key: 'TotalRecovered',
    className: "healthy"
  },
  {
    text: '%',
    hint: 'Recovered, as percentage of Sick',
    key: 'TotalRecoveredPercent',
    className: "healthy"
  },
  {
    text: 'New',
    hint: 'New Recovered',
    key: 'NewRecovered',
    className: "healthy"
  },
  {
    text: 'Total',
    hint: 'Total Dead',
    key: 'TotalDeaths',
    className: "dead"
  },
  {
    text: '%',
    hint: 'Dead, as percentage of Sick',
    key: 'TotalDeathsPercent',
    className: "dead"
  },
  {
    text: 'New',
    hint: 'New Dead',
    key: 'NewDeaths',
    className: "dead"
  }
];
