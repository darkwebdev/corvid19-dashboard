import React, { FC, useState } from 'react';
import { useParams } from '@reach/router';
import useCountryHistory from '../hooks/useCountryHistory';
import Chart from './Chart';

const Country: FC = () => {
  const { slug } = useParams();
  const [error, setError] = useState<string|undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const countryHistory = useCountryHistory(
    slug,
    e => { setError(String(e)); },
    () => setLoading(false)
  );

  return <>
    <section>
      {loading && <p>Loading data...</p>}
      {error && <p>{error}</p>}
      <Chart title={`Sick in ${slug}`} data={countryHistory} />
    </section>
  </>;
}

export default Country;
