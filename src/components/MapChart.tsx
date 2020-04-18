import React, { FC } from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';
import mapData from '@highcharts/map-collection/custom/world.geo.json';
import { colors } from '../const';

type CountryData = {
  code?: string;
  value?: number;
}

type Props = {
  title: string;
  data: CountryData[];
  valueSuffix?: string;
  color?: string;
  colorAxisMax?: number;
}

const MapChart: FC<Props> = ({ title, data, valueSuffix= 'ppl', color = colors.dead, colorAxisMax }) => {
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
      ],
      max: colorAxisMax
    },
    tooltip: {
      valueSuffix
    },
    // uncomment after bugfix release v8.0.5 (or v8.1.0)
    // mapNavigation: {
    //   enabled: true,
    //   buttonOptions: {
    //     verticalAlign: 'bottom'
    //   }
    // },
    series: [{
      type: 'map',
      mapData,
      // @ts-ignore
      joinBy: ['iso-a2', 'code'],
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
