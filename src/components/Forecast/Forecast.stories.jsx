import React from 'react'
import Forecast from './Forecast'

export default {
  title: "Forecast",
  component: Forecast
}

const forecastItemList = [
  { hour: 18, state: "clear", temperature: 17, weekDay: "Viernes" },
  { hour: 6, state: "clouds", temperature: 18, weekDay: "Sabado" },
  { hour: 12, state: "clouds", temperature: 18, weekDay: "Domingo" },
  { hour: 18, state: "rain", temperature: 19, weekDay: "Lunes" },
  { hour: 6, state: "clear", temperature: 17, weekDay: "Martes" },
  { hour: 12, state: "drizzle", temperature: 17, weekDay: "Miercoles" }
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)
