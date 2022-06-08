import React from 'react'
import Forecast from './Forecast'

export default {
  title: "Forecast",
  component: Forecast
}

const forecastItemList = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Viernes" },
  { hour: 6, state: "cloud", temperature: 18, weekDay: "Sabado" },
  { hour: 12, state: "cloudy", temperature: 18, weekDay: "Domingo" },
  { hour: 18, state: "rain", temperature: 19, weekDay: "Lunes" },
  { hour: 6, state: "sunny", temperature: 17, weekDay: "Martes" },
  { hour: 12, state: "cloud", temperature: 17, weekDay: "Miercoles" }
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)
