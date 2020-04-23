import { useEffect, useState } from 'react';
import { Country } from '../components/Summary';

export type Summary = {
  Countries: Country[];
  Date: string;
}

const useSummary = (onError: (e: Error) => void, onFinal: () => void) => {
  const [summary, setSummary] = useState<Summary | undefined>();

  const fetchUrl = (url: string): Promise<Summary> =>
    fetch(url, {cache: 'force-cache' })
      .then(response => response.json())
      .then(data => {
        setSummary(data);
        return data;
      })
      .catch(err => {

        onError(err);
        console.error(err);
      })
      .finally(onFinal);

  useEffect(() => {
    fetchUrl('https://api.covid19api.com/summary').then(setSummary)
  }, []);

  return summary;
};

export default useSummary;
