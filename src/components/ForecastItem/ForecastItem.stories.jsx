import React from 'react'
import ForecastItem from './ForecastItem'


export default {
  title: "ForecastItem",
  component: ForecastItem
}

export const ForecastItemExample = () => (<ForecastItem weekDay='lunes' hour={10} state='clear' temperature={19} ></ForecastItem>)
