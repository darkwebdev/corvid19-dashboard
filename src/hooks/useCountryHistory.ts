import { useEffect, useState } from 'react';
import { CountryData } from '../components/Chart';
import { colors } from '../const';

type CountryDay = {
  Country: string;
  Date: string;
  Confirmed: number;
  Recovered: number;
  Deaths: number;
}

const useCountryHistory = (slug: string, onError: (e: Error) => void, onFinally: () => void) => {
  const [ countryHistory, setCountryHistory ] = useState<CountryData[]>([]);

  useEffect(() => {
    fetch(`https://api.covid19api.com/total/dayone/country/${slug}`)
        .then(response => response.json())
        .then((days: CountryDay[]) => {
          const countrySickData: CountryData = {
            type: 'line',
            name: 'Sick',
            color: colors.sick,
            data: days.map(({ Date: date, Confirmed }) => [
              new Date(date).getTime(),
              Confirmed
            ])
          };
          const countryHealthyData: CountryData = {
            type: 'line',
            name: 'Healthy',
            color: colors.healthy,
            data: days.map(({ Date: date, Recovered }) => [
              new Date(date).getTime(),
              Recovered
            ])
          };
          const countryDeadData: CountryData = {
            type: 'line',
            name: 'Dead',
            color: colors.dead,
            data: days.map(({ Date: date, Deaths }) => [
              new Date(date).getTime(),
              Deaths
            ])
          };
          setCountryHistory([countrySickData, countryHealthyData, countryDeadData]);
        })
        .catch(onError)
        .finally(onFinally)
  }, []);

  return countryHistory;
};

export default useCountryHistory;
