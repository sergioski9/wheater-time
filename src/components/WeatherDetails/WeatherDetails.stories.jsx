import React from 'react'
import WeatherDetails from './WeatherDetails'

export default {
  title: 'WeatherDetails',
  component: WeatherDetails
}

export const WeatherDetailsExample = () => <WeatherDetails humidity={17} wind={45} />
