import React from 'react'
import { render } from '@testing-library/react'
import ErrorRequirements from './ErrorRequirements'

it('renders error requirements when input is focused', () => {
  render(<ErrorRequirements focused />)
})

it('renders error requirements when input is not focused', () => {
  render(<ErrorRequirements focused={false} />)
})

it('renders error requirements when it has an object of requirements', () => {
  render(
    <ErrorRequirements
      focused={false}
      error={{
        isError: true,
        requirements: {
          data: [
            { name: 'test1', isError: true, shouldIndent: true },
            { name: 'test2', isError: false, shouldIndent: false }
          ],
          name: ''
        }
      }}
    />
  )
})

it('renders error requirements when it is not valid and it has a string of requirements', () => {
  render(
    <ErrorRequirements
      focused={false}
      error={{
        isError: true,
        requirements: 'test requirements'
      }}
    />
  )
})
