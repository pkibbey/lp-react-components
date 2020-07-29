import React from 'react'
import { render } from '@testing-library/react'
import ErrorText from './ErrorText'

// TODO: add expects to the tests

test('renders error text when there is no error', () => {
  render(<ErrorText name='test' error={{ isError: false, message: 'test' }} />)
})

test('renders error text when there is an error', () => {
  render(<ErrorText name='test' error={{ isError: true, message: 'test' }} />)
})

test('renders recaptcha error text when there is an error', () => {
  render(
    <ErrorText name='recaptcha' error={{ isError: true, message: 'test' }} />
  )
})
