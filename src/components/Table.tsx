import React, { FC } from 'react';
import { Country } from './Summary';

type Props = {
  countries: Country[];
}

const Table: FC<Props> = ({ countries = []}) => {
  const sortedCountries = countries.sort((country1, country2) =>
    country2.TotalConfirmed - country1.TotalConfirmed);

  return <table>
    <thead>
    <tr>
      <th>Country</th>
      <th>Sick</th>
      <th>New Sick</th>
      <th>Recovered</th>
      <th>New Recovered</th>
      <th>Dead, ppl</th>
      <th>New Dead, ppl</th>
      <th>Dead, %</th>
    </tr>
    </thead>
    <tbody>
    {sortedCountries.map((country, i) =>
      <tr key={i}>
        <td>{country.Country}</td>
        <td>{country.TotalConfirmed}</td>
        <td>{country.NewConfirmed}</td>
        <td>{country.TotalRecovered}</td>
        <td>{country.NewRecovered}</td>
        <td>{country.TotalDeaths}</td>
        <td>{country.NewDeaths}</td>
        <td>{country.TotalDeathsPercent}</td>
      </tr>
    )}
    </tbody>
  </table>;
};

export default Table;
