import React from 'react'
import CityList from './CityList'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


const cities = [
  { city: 'Santa Cruz', country: 'Bolivia' },
  { city: 'Buenos Aires', country: 'Argentina' },
  { city: 'Brasil', country: 'Sao Paulo' },
  { city: 'Ciudad de Mexico', country: 'Mexico' }
]

test('CityList render', async () => {


  const { findAllByRole } = render(<CityList cities={cities} />)

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const items = await findAllByRole('listitem')
  // Assert
  expect(items).toHaveLength(4)
})

test('CityList click on item', async () => {
  const fnClickOnItem = jest.fn()

  const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const items = await findAllByRole('listitem')

  fireEvent.click(items[0])

  expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
