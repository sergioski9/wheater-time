import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


test('Weather render', async () => {
  // AAA Arrange Act Assert
  const { findByRole } = render(<Weather temperature={10} state='cloud' />)

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const temp = await findByRole('heading')

  expect(temp).toHaveTextContent('10')
})
