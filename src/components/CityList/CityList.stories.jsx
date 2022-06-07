import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
  title: 'CityList',
  component: CityList
}

const cities = [
  { city: 'Santa Cruz', country: 'Bolivia' },
  { city: 'Buenos Aires', country: 'Argentina' },
  { city: 'Brasil', country: 'Sao Paulo' },
  { city: 'Ciudad de Mexico', country: 'Mexico' }
]

export const renderCityList = () => <CityList cities={cities} onClickCity={action('Click in city')} />
