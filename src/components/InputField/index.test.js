import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import InputField from './'

const mockBlur = jest.fn()
const mockChange = jest.fn()
const INPUT_NAME = 'test1'
const INPUT_VALUE = 'test value'
const PLACEHOLDER = 'test placeholder'
const ERROR = {
  isError: true,
  requirements: {
    name: 'errors...',
    data: [
      { name: 'data1', isError: true },
      { name: 'data2', isError: false }
    ]
  }
}

beforeEach(() => {
  jest.clearAllMocks()
})

it('renders an input field', () => {
  render(
    <InputField
      name={INPUT_NAME}
      value={INPUT_VALUE}
      handleChange={mockChange}
      handleBlur={mockBlur}
      placeholder={PLACEHOLDER}
      shouldFocusOnLoad
      isFullWidth
    />
  )
  const input = screen.getByRole('textbox')

  expect(mockChange).not.toHaveBeenCalled()
  expect(mockBlur).not.toHaveBeenCalled()
  expect(input).toHaveAttribute('placeholder', PLACEHOLDER)
  expect(input).toHaveAttribute('type', 'text')
  expect(input).toHaveValue(INPUT_VALUE)
  expect(input).toHaveFocus()
})

it('renders an input field with errors', () => {
  render(
    <InputField
      name={INPUT_NAME}
      value={INPUT_VALUE}
      handleChange={mockChange}
      handleBlur={mockBlur}
      placeholder={PLACEHOLDER}
      error={ERROR}
    />
  )
  const input = screen.getByRole('textbox')
  const errorName = screen.getByText(ERROR.requirements.name)
  const errorData1 = screen.getByText(ERROR.requirements.data[0].name)
  const errorData2 = screen.getByText(ERROR.requirements.data[1].name)

  expect(errorName).toBeInTheDocument()
  expect(errorData1).toBeInTheDocument()
  expect(errorData2).toBeInTheDocument()
  expect(mockChange).not.toHaveBeenCalled()
  expect(mockBlur).not.toHaveBeenCalled()
  expect(input).not.toHaveFocus()
})

it('renders a disabled input field', () => {
  render(
    <InputField
      name={INPUT_NAME}
      value={INPUT_VALUE}
      disabled
      handleChange={mockChange}
      handleBlur={mockBlur}
      placeholder={PLACEHOLDER}
      error={ERROR}
    />
  )
  const input = screen.getByRole('textbox')

  expect(input).not.toHaveFocus()
  expect(input).toBeDisabled()
})

test('input field blur event is fired', () => {
  render(
    <InputField
      name={INPUT_NAME}
      value={INPUT_VALUE}
      handleChange={mockChange}
      handleBlur={mockBlur}
      placeholder={PLACEHOLDER}
    />
  )
  const input = screen.getByRole('textbox')

  fireEvent.blur(input)
  expect(mockBlur).toHaveBeenCalledTimes(1)
  expect(mockChange).toHaveBeenCalledTimes(0)
})

test('input field change event is fired', () => {
  render(
    <InputField
      name={INPUT_NAME}
      value={INPUT_VALUE}
      handleChange={mockChange}
      handleBlur={mockBlur}
      placeholder={PLACEHOLDER}
    />
  )
  const input = screen.getByRole('textbox')

  fireEvent.change(input, { target: { value: 'new-value' } })
  expect(mockBlur).toHaveBeenCalledTimes(0)
  expect(mockChange).toHaveBeenCalledTimes(1)
})

it('renders a password field and shows the text when clicking the icon', () => {
  render(
    <InputField
      name={INPUT_NAME}
      type='password'
      value={INPUT_VALUE}
      handleChange={mockChange}
      handleBlur={mockBlur}
      placeholder={PLACEHOLDER}
    />
  )

  const input = screen.getByPlaceholderText(PLACEHOLDER)
  const icon = screen.getByTitle('toggle password visibility')
  expect(input).toHaveAttribute('type', 'password')

  icon.click()

  expect(mockChange).not.toHaveBeenCalled()
  expect(mockBlur).not.toHaveBeenCalled()
  expect(input).toHaveAttribute('type', 'text')
  expect(input).toHaveValue(INPUT_VALUE)
  expect(input).not.toHaveFocus()
})
