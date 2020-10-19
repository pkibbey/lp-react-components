import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorRequirements from './ErrorRequirements'

const ERROR_OBJECT = {
  isError: true,
  requirements: {
    name: 'error name',
    data: [
      { name: 'test1', isError: true, shouldIndent: true },
      { name: 'test2', isError: false, shouldIndent: false }
    ]
  }
}

it('renders no error requirements when input is focused and there are no errors', () => {
  const { container } = render(<ErrorRequirements focused />)

  expect(container).toBeEmptyDOMElement()
})

it('renders no error requirements when input is not focused and there are no errors', () => {
  const { container } = render(<ErrorRequirements focused={false} />)

  expect(container).toBeEmptyDOMElement()
})

it('renders error requirements when it has an object of requirements', () => {
  render(<ErrorRequirements focused={false} error={ERROR_OBJECT} />)

  const errorName = screen.getByText(`${ERROR_OBJECT.requirements.name}:`)
  const errorData1 = screen.getByText(ERROR_OBJECT.requirements.data[0].name)
  const errorData2 = screen.getByText(ERROR_OBJECT.requirements.data[1].name)

  expect(errorName).toBeInTheDocument()
  expect(errorData1).toBeInTheDocument()
  expect(errorData2).toBeInTheDocument()
})
