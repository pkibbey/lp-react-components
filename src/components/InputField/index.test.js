import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputField from './'

// NOTE: cannot reliably use snapshot tests, since the input name is generated randomly
// and will fail every time the test is run

const mockFunction = jest.fn()

it('renders an input field', () => {
  render(
    <InputField
      name='test1'
      value='test value'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      placeholder='test placeholder'
      shouldFocusOnLoad
      isFullWidth
    />
  )
  expect(mockFunction).not.toHaveBeenCalled()
})

it('renders an input field with errors', () => {
  render(
    <InputField
      name='test2'
      value='test value'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      placeholder='test placeholder'
      error={{
        isError: true,
        requirements: {
          name: 'errors...',
          data: [
            { name: 'data1', isError: true },
            { name: 'data2', isError: false }
          ]
        }
      }}
    />
  )
  expect(mockFunction).not.toHaveBeenCalled()
})

it('renders a disabled input field', () => {
  render(
    <InputField
      name='test2'
      value='test value'
      disabled
      handleChange={mockFunction}
      handleBlur={mockFunction}
      placeholder='test placeholder'
      error={{
        isError: true,
        requirements: {
          name: 'errors...',
          data: [
            { name: 'data1', isError: true },
            { name: 'data2', isError: false }
          ]
        }
      }}
    />
  )
  expect(mockFunction).not.toHaveBeenCalled()
})

test('input field blur event is fired', () => {
  const { getByTestId } = render(
    <InputField
      name='test3'
      value='test value'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      placeholder='test placeholder'
    />
  )
  fireEvent.blur(getByTestId('input-field-test3'))
  expect(mockFunction).toHaveBeenCalled()
})

test('input field change event is fired', () => {
  const { getByTestId } = render(
    <InputField
      name='test4'
      value='test value'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      placeholder='test placeholder'
    />
  )
  fireEvent.change(getByTestId('input-field-test4'), {
    target: { value: 'new-value' }
  })
  expect(mockFunction).toHaveBeenCalledTimes(2)
})

it('renders a password field and shows the text when clicking the icon', () => {
  const { getByTestId } = render(
    <InputField
      name='password'
      type='password'
      value='test value'
      handleChange={mockFunction}
      handleBlur={mockFunction}
      placeholder='test placeholder'
    />
  )
  getByTestId('password-icon').click()
  expect(mockFunction).toHaveBeenCalledTimes(2)
})
