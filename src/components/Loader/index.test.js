import React from 'react'
import { render } from '@testing-library/react'
import Loader from './'

it('renders a default loader', () => {
  const { container } = render(<Loader />)
  const element = container.querySelector('.react-spinner-material')
  expect(element).toBeEmptyDOMElement()
  expect(element).toHaveStyle({
    width: '24px',
    height: '24px',
    borderColor: 'white',
    borderWidth: '2px'
  })
})

it('renders a small loader', () => {
  const { container } = render(<Loader size='small' />)
  const element = container.querySelector('.react-spinner-material')
  expect(element).toBeEmptyDOMElement()
  expect(element).toHaveStyle({
    width: '18px',
    height: '18px',
    borderColor: 'white',
    borderWidth: '2px'
  })
})

it('renders a large loader', () => {
  const { container } = render(<Loader size='large' />)
  const element = container.querySelector('.react-spinner-material')
  expect(element).toBeEmptyDOMElement()
  expect(element).toHaveStyle({
    width: '40px',
    height: '40px',
    borderColor: 'white',
    borderWidth: '2px'
  })
})
