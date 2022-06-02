import React from 'react'
import CityList from './CityList'

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

export const renderCityList = () => <CityList cities={cities} />
