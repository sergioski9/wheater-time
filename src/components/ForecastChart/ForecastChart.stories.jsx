import React from 'react'
import ForecastChart from './ForecastChart'


export default {
  title: 'ForecastChart',
  component: ForecastChart
}

const data = [
  { dayHour: 'vie 14', min: 19, max: 23},
  { dayHour: 'sab 15', min: 14, max: 19 },
  { dayHour: 'dom 16', min: 25, max: 31 },
  { dayHour: 'lun 17', min: 4, max: 10 },
  { dayHour: 'mar 18', min: 9, max: 14 },
  { dayHour: 'mie 19', min: 17, max: 26 },
  { dayHour: 'jue 20', min: 21, max: 24 }
]

export const ForecastChartExample = () => (<ForecastChart data={data} />)
