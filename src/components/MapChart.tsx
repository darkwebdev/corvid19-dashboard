import React, { FC, useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';
import mapData from '@highcharts/map-collection/custom/world.geo.json';
import highchartsMap from 'highcharts/modules/map';

highchartsMap(Highcharts);

type CountryData = {
  'iso-a2': string;
  value: number;
}
type Props = {
  title: string;
  data: CountryData[];
  valueSuffix?: string;
}

const MapChart: FC<Props> = ({ title, data, valueSuffix= 'ppl' }) => {
  const options: Highcharts.Options = {
    title: {
      text: title
    },
    colorAxis: {
      min: 0,
      // type: 'logarithmic',
      stops: [
        [0, '#FFEFEF'],
        [1, '#FF0000']
      ]
    },
    tooltip: {
      valueSuffix
    },
    series: [{
      type: 'map',
      mapData,
      joinBy: 'iso-a2',
      data
    }]
  };

  return <HighchartsReact
    options={options}
    constructorType="mapChart"
    highcharts={Highcharts}
  />;
};

export default MapChart;
