import { hot } from 'react-hot-loader/root';
import React, { FC, useEffect, useState } from 'react';

const Home: FC = () => {
  const [summary, setSummary] = useState();
  const [error, setError] = useState<string|undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSummary(data);
      })
      .catch(err => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <>
    <h2>Summary</h2>
    {loading && <p>Loading data...</p>}
    {summary && <p>{summary}</p>}
    {error && <p>{error}</p>}
  </>;
};

export default hot(Home);
