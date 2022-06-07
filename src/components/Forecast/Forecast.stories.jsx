import React from 'react'
import Forecast from './Forecast'

export default {
  title: "Forecast",
  component: Forecast
}

const forecastItemList = [
  { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
  { hour: 6, state: "cloud", temperature: 18, weekDay: "Viernes" },
  { hour: 12, state: "cloudy", temperature: 18, weekDay: "lunes" },
  { hour: 18, state: "rain", temperature: 19, weekDay: "martes" },
  { hour: 6, state: "sunny", temperature: 17, weekDay: "miercoles" },
  { hour: 12, state: "cloud", temperature: 17, weekDay: "Sábado" }
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)
