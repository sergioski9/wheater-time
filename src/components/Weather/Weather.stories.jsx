import React from 'react'
import Weather from './Weather'

export default {
  title: 'Weather',
  component: Weather
}

const Template = args => <Weather {...args} />

export const WeatherCloud = Template.bind({})
WeatherCloud.args = { temperature: 10, state: 'clouds' }

export const WeatherClear = Template.bind({})
WeatherClear.args = { temperature: 12, state: 'clear' }
