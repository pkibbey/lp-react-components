import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorText from './'

const NO_ERROR = { isError: false, hasInteracted: true, message: 'test' }
const NO_ERROR_NOT_INTERACTED = {
  isError: false,
  hasInteracted: false,
  message: 'test'
}
const IS_ERROR = { isError: true, hasInteracted: true, message: 'test' }
const IS_ERROR_NOT_INTERACTED = {
  isError: true,
  hasInteracted: false,
  message: 'test'
}

it('renders no error text when there is no error', () => {
  const { container } = render(<ErrorText error={NO_ERROR} />)
  expect(container).toBeEmptyDOMElement()
})

it('renders no error text when there is no error and it has not been interacted with', () => {
  const { container } = render(<ErrorText error={NO_ERROR_NOT_INTERACTED} />)
  expect(container).toBeEmptyDOMElement()
})

it('renders error text when there is an error', () => {
  const { container } = render(<ErrorText error={IS_ERROR} />)
  expect(container).toHaveTextContent(IS_ERROR.message)
  expect(container).toHaveStyle({
    color: 'rgb(223, 42, 49);'
  })
})

it('renders no error text when there is an error and it has not been interacted with', () => {
  const { container } = render(<ErrorText error={IS_ERROR_NOT_INTERACTED} />)
  expect(container).toBeEmptyDOMElement()
})
