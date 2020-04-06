import React, { FC } from 'react';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import highchartsSeriesLabel from "highcharts/modules/series-label";
import HighchartsReact from 'highcharts-react-official';

highchartsSeriesLabel(Highcharts);

export type CountryData = {
  type: string;
  name: string;
  data: [number, number][];
}

type Props = {
  title: string;
  data: CountryData[];
}

const Chart: FC<Props> = ({ title, data }) => {
  const options: Highcharts.Options = {
    title: {
      text: title
    },
    subtitle: {
      text: 'Click and drag to zoom in. Hold down shift key to pan.'
    },
    xAxis: {
      type: 'datetime'
    },
    legend: {
      // enabled: false
    },
    chart: {
      height: 500,
      zoomType: 'x',
      panning: {
        enabled: true,
        type: 'x'
      },
      panKey: 'shift'
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      }
    },
    series: data as SeriesOptionsType[]
  };

  return <HighchartsReact
    options={options}
    constructorType="chart"
    highcharts={Highcharts}
  />;
};

export default Chart;
