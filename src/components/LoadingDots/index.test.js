import React from 'react'
import { render } from '@testing-library/react'
import LoadingDots from './'

it('renders default LoadingDots', () => {
  const { container } = render(<LoadingDots />)
  const elements = container.querySelectorAll('span > span')
  expect(elements).toHaveLength(3)
  expect(elements[0]).toHaveStyle({
    width: '3px',
    height: '3px',
    backgroundColor: '#463E36;'
  })
})

it('renders dark loading dots', () => {
  const { container } = render(<LoadingDots variant='dark' />)
  const elements = container.querySelectorAll('span > span')
  expect(elements).toHaveLength(3)
  expect(elements[0]).toHaveStyle({
    width: '3px',
    height: '3px',
    backgroundColor: '#463E36;'
  })
})
