import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SelectField from './'

const OPTIONS = [
  { name: 'Select country', value: 'choose-country', disabled: true },
  { name: 'Country 1', value: 'country-1' },
  { name: 'Country 2', value: 'country-2' }
]
const mockFunction = jest.fn()

test('renders a select field', () => {
  render(
    <SelectField
      name='select1'
      value='test'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      error={{}}
      options={OPTIONS}
    />
  )
  expect(mockFunction).not.toHaveBeenCalled()
})

test('renders a select field with an error', () => {
  render(
    <SelectField
      name='select2'
      value='test'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      error={{ isError: true }}
      options={OPTIONS}
    />
  )
  expect(mockFunction).not.toHaveBeenCalled()
})

test('select field change event is fired', () => {
  const { getByTestId } = render(
    <SelectField
      name='select3'
      value='test'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      error={{}}
      options={OPTIONS}
    />
  )
  fireEvent.change(getByTestId('select-field-select3'), {
    target: { value: 'new-value' }
  })
  expect(mockFunction).toHaveBeenCalled()
})

test('select field blur event is fired', () => {
  const { getByTestId } = render(
    <SelectField
      name='select5'
      value='test'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      error={{}}
      options={OPTIONS}
    />
  )
  fireEvent.blur(getByTestId('select-field-select5'))
  expect(mockFunction).toHaveBeenCalled()
})
