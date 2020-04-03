import React, { FC } from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';
import mapData from '@highcharts/map-collection/custom/world.geo.json';
import { colors } from '../const';

type CountryData = {
  'iso-a2'?: string;
  value?: number;
}
type Props = {
  title: string;
  data: CountryData[];
  valueSuffix?: string;
  color?: string;
}

const MapChart: FC<Props> = ({ title, data, valueSuffix= 'ppl', color = colors.dead }) => {
  const colorAxisType = data.some(({ value }) => !value) ? 'linear' : 'logarithmic';
  const options: Highcharts.Options = {
    title: {
      text: title
    },
    colorAxis: {
      type: colorAxisType,
      stops: [
        [0, '#fff'],
        // [0.5, color+'66'],
        [1, color]
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
