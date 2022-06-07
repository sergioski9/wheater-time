/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */
import React from 'react'
import ForecastItem from './ForecastItem'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


test('ForecastItem render', async () => {
  // AAA Arrange Act Assert
  const { findByText } = render(<ForecastItem weekDay='lunes' state='fog' hour={10} temperature={13} />)

  const weekDay = await findByText(/lunes/)
  const hour = await findByText(/10/)
  const temperature = await findByText(/13/)
  const state = await findByText(/fog/)

  expect(state).toHaveTextContent('fog')
  expect(weekDay).toHaveTextContent('lunes')
  expect(hour).toHaveTextContent(10)
  expect(temperature).toHaveTextContent(13)
})
