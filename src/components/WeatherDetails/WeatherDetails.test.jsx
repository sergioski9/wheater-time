/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */
import React from 'react'
import WeatherDetails from './WeatherDetails'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


test('WeatherDetails render', async () => {
  // AAA Arrange Act Assert

  const { findByText } = render(<WeatherDetails wind={9} humidity={10} />)

  const wind = await findByText(/9/)

  const humidity = await findByText(/10/)


  expect(wind).toHaveTextContent('Viento: 9 km/h')
  expect(humidity).toHaveTextContent('Humedad: 10%')
})
