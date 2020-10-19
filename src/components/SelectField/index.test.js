import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import SelectField from './'

const OPTIONS = [
  { name: 'Country 1', value: 'country-1' },
  { name: 'Country 2', value: 'country-2' },
  { name: 'Country 3', value: 'country-3' }
]
const mockBlur = jest.fn()
const mockChange = jest.fn()
const SELECT_NAME = 'select1'
const ERROR_MESSAGE = 'error message'

beforeEach(() => {
  jest.clearAllMocks()
})

it('renders a select field', () => {
  render(
    <SelectField
      name={SELECT_NAME}
      defaultValue={OPTIONS[1].value}
      handleChange={mockChange}
      handleBlur={mockBlur}
      options={OPTIONS}
      isFullWidth
    />
  )
  const combobox = screen.getByRole('combobox')
  const options = screen.getAllByRole('option')
  const error = screen.queryByText(ERROR_MESSAGE)

  expect(error).toBeNull()
  expect(combobox).toHaveAttribute('name', SELECT_NAME)
  expect(combobox).toHaveValue(OPTIONS[1].value)
  expect(options).toHaveLength(3)
  expect(mockChange).not.toHaveBeenCalled()
  expect(mockBlur).not.toHaveBeenCalled()
})

it('renders a select field with an error', () => {
  render(
    <SelectField
      name={SELECT_NAME}
      defaultValue={OPTIONS[2].value}
      handleChange={mockChange}
      handleBlur={mockBlur}
      error={{ isError: true, message: ERROR_MESSAGE, hasInteracted: true }}
      options={OPTIONS}
    />
  )
  const combobox = screen.getByRole('combobox')
  const options = screen.getAllByRole('option')
  const error = screen.getByText(ERROR_MESSAGE)

  expect(error).toHaveStyle({ color: 'rgb(223, 42, 49)' })
  expect(combobox).toHaveAttribute('name', SELECT_NAME)
  expect(options).toHaveLength(3)
  expect(combobox).toHaveValue(OPTIONS[2].value)
  expect(mockChange).not.toHaveBeenCalled()
  expect(mockBlur).not.toHaveBeenCalled()
})

it('renders a select field with no value', () => {
  render(
    <SelectField
      name={SELECT_NAME}
      defaultValue={OPTIONS[2].value}
      handleChange={mockChange}
      handleBlur={mockBlur}
      options={OPTIONS}
    />
  )
  const combobox = screen.getByRole('combobox')
  const options = screen.getAllByRole('option')
  const error = screen.queryByText(ERROR_MESSAGE)

  expect(error).toBeNull()
  expect(combobox).toHaveAttribute('name', SELECT_NAME)
  expect(combobox).toHaveValue(OPTIONS[2].value)
  expect(options).toHaveLength(3)
  expect(mockChange).not.toHaveBeenCalled()
  expect(mockBlur).not.toHaveBeenCalled()
})

it('renders a select field with an error and no value', () => {
  render(
    <SelectField
      name={SELECT_NAME}
      defaultValue=''
      handleChange={mockChange}
      handleBlur={mockBlur}
      error={{ isError: true }}
      options={OPTIONS}
    />
  )
  const combobox = screen.getByRole('combobox')
  const options = screen.getAllByRole('option')
  const error = screen.queryByText(ERROR_MESSAGE)

  expect(error).toBeNull()
  expect(combobox).toHaveAttribute('name', SELECT_NAME)
  expect(combobox).toHaveValue(OPTIONS[0].value)
  expect(options).toHaveLength(3)
  expect(mockChange).not.toHaveBeenCalled()
  expect(mockBlur).not.toHaveBeenCalled()
})

test('select field change event is fired', () => {
  render(
    <SelectField
      name={SELECT_NAME}
      defaultValue=''
      handleChange={mockChange}
      handleBlur={mockBlur}
      options={OPTIONS}
    />
  )
  const combobox = screen.getByRole('combobox')

  fireEvent.change(combobox, {
    target: { value: OPTIONS[2].value }
  })

  expect(combobox).toHaveValue(OPTIONS[2].value)
  expect(mockChange).toHaveBeenCalledTimes(1)
  expect(mockBlur).not.toHaveBeenCalled()
})

test('select field blur event is fired', () => {
  render(
    <SelectField
      name={SELECT_NAME}
      defaultValue={OPTIONS[0].value}
      handleChange={mockChange}
      handleBlur={mockBlur}
      options={OPTIONS}
    />
  )
  const combobox = screen.getByRole('combobox')

  fireEvent.blur(combobox)

  expect(combobox).toHaveValue(OPTIONS[0].value)
  expect(mockChange).toHaveBeenCalledTimes(0)
  expect(mockBlur).toHaveBeenCalledTimes(1)
})
