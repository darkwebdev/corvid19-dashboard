import { useEffect, useState } from 'react';
import { CountryData } from '../components/Chart';
import { Country } from '../components/Summary';
import { Summary } from './useSummary';

type CountryHistory = CountryData[]

type CountryDay = {
  Country: string;
  Date: string;
  Cases: number;
}

const useTopCountriesHistory = (summary?: Summary, onError: (e: Error) => void = () => {}) => {
  const [ countryHistory, setCountryHistory ] = useState<CountryHistory>([]);

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
        .catch(onError)
    })
  }, [summary]);

  return countryHistory;
};

const sortBySick = (country1: Country, country2: Country): number =>
  (country2['TotalConfirmed'] - country1['TotalConfirmed']);

export default useTopCountriesHistory;
