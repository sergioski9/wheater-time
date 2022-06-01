import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

test('CityInfo render', async () => {
  // AAA
  // Arrange
  // Act
  const city = 'Santa Cruz'

  const country = 'Bolivia'

  const { findAllByRole } = render(<CityInfo city={ city } country={ country } />)

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const cityAndCountryComponents = await findAllByRole('heading')
  // Assert
  expect(cityAndCountryComponents[0]).toHaveTextContent(city)
  expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})
