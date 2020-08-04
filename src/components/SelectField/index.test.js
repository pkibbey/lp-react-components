import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import SelectField from './'

const OPTIONS = [
  { name: 'Select country', value: 'choose-country', disabled: true },
  { name: 'Country 1', value: 'country-1' },
  { name: 'Country 2', value: 'country-2' }
]
const mockFunction = jest.fn()

it('renders a select field', () => {
  const tree = renderer
    .create(
      <SelectField
        name='select1'
        value='test'
        handleChange={mockFunction}
        handleBlur={mockFunction}
        options={OPTIONS}
        isFullWidth
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
  expect(mockFunction).not.toHaveBeenCalled()
})

it('renders a select field with an error', () => {
  const tree = renderer
    .create(
      <SelectField
        name='select2'
        value='test'
        handleChange={mockFunction}
        handleBlur={mockFunction}
        error={{ isError: true }}
        options={OPTIONS}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
  expect(mockFunction).not.toHaveBeenCalled()
})

it('renders a select field with no value', () => {
  const tree = renderer
    .create(
      <SelectField
        name='select2'
        value=''
        handleChange={mockFunction}
        handleBlur={mockFunction}
        options={OPTIONS}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
  expect(mockFunction).not.toHaveBeenCalled()
})

it('renders a select field with an error and no value', () => {
  const tree = renderer
    .create(
      <SelectField
        name='select2'
        value=''
        handleChange={mockFunction}
        handleBlur={mockFunction}
        error={{ isError: true }}
        options={OPTIONS}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
  expect(mockFunction).not.toHaveBeenCalled()
})

test('select field change event is fired', () => {
  const { getByTestId } = render(
    <SelectField
      name='select3'
      value='test'
      handleChange={mockFunction}
      handleBlur={mockFunction}
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
      options={OPTIONS}
    />
  )
  fireEvent.blur(getByTestId('select-field-select5'))
  expect(mockFunction).toHaveBeenCalled()
})
