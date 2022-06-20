import React from 'react'
import 'typeface-roboto'
import CityInfo from './CityInfo'

export default {
  title: "CityInfo",
  component: CityInfo,
  argTypes: {
    city: { control: { type: 'text' } },
    country: { control: { type: 'text' } }
  }
}

export const CityExample = (args) => <CityInfo {...args} />
CityExample.args = { city: 'Santa Cruz', country: 'Bolivia' }
