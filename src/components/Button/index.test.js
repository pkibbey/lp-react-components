import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './'

const TEST_LABEL = 'test label'

it('renders a button with a label', () => {
  render(<Button label={TEST_LABEL} />)
  const element = screen.getByRole('button')
  expect(element).toHaveTextContent(TEST_LABEL)
  expect(element).toHaveStyle({
    width: 'auto'
  })
})

it('renders a full width button', () => {
  render(<Button label={TEST_LABEL} isFullWidth />)
  const element = screen.getByRole('button')
  expect(element).toHaveTextContent(TEST_LABEL)
  expect(element).toHaveStyle({
    width: '100%'
  })
})

it('renders a loading button', () => {
  const { container } = render(<Button isLoading />)
  const element = container.querySelector('.react-spinner-material')
  expect(element).toHaveStyle({
    width: '24px',
    height: '24px',
    borderColor: 'white',
    borderWidth: '2px'
  })
})

it('renders a secondary loading button', () => {
  const { container } = render(<Button isLoading variant='secondary' />)
  const element = container.querySelector('.react-spinner-material')
  expect(element).toHaveStyle({
    display: 'block',
    height: '18px',
    width: '18px'
  })
})

it('renders a secondary button', () => {
  render(<Button label={TEST_LABEL} variant='secondary' />)
  const element = screen.getByRole('button')
  expect(element).toHaveTextContent(TEST_LABEL)
  expect(element).toHaveStyle({
    width: 'auto'
  })
})

it('responds to a click', () => {
  const mockFunction = jest.fn()
  render(<Button handleClick={mockFunction} />)
  const element = screen.getByRole('button')
  element.click()
  expect(mockFunction).toHaveBeenCalledTimes(1)
})
