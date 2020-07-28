import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from '../components/InputField';

const mockFunction = jest.fn();

test('renders an input field', () => {
  render(<InputField
    name="test-name"
    value="test value"
    updateUserDetail={mockFunction}
    updateError={mockFunction}
    placeholder="test placeholder"
    error={{}}
    isFirst={false}
  />);
  expect(mockFunction).not.toHaveBeenCalled();
});

test('renders an input field with errors', () => {
  render(<InputField
    name="test-name"
    value="test value"
    updateUserDetail={mockFunction}
    updateError={mockFunction}
    placeholder="test placeholder"
    error={{
      isError: true,
      requirements: [
        { name: 'test', isError: true },
        { name: 'test', isError: false },
      ],
    }}
    isFirst={false}
  />);
  expect(mockFunction).not.toHaveBeenCalled();
});

test('input field blur event is fired', () => {
  const { getByTestId } = render(<InputField
    name="test-name"
    value="test value"
    updateUserDetail={mockFunction}
    updateError={mockFunction}
    placeholder="test placeholder"
    error={{}}
    isFirst={false}
  />);
  fireEvent.blur(getByTestId('input-field-test-name'));
  expect(mockFunction).toHaveBeenCalled();
});

test('input field change event is fired', () => {
  const { getByTestId } = render(<InputField
    name="test-name"
    value="test value"
    updateUserDetail={mockFunction}
    updateError={mockFunction}
    placeholder="test placeholder"
    error={{}}
    isFirst={false}
  />);
  fireEvent.change(getByTestId('input-field-test-name'), { target: { value: 'new-value' } });
  expect(mockFunction).toHaveBeenCalledTimes(2);
});

test('renders a password field and shows the text when clicking the icon', () => {
  const { getByTestId } = render(<InputField
    name="password"
    value="test value"
    updateUserDetail={mockFunction}
    updateError={mockFunction}
    placeholder="test placeholder"
    error={{}}
    isFirst={false}
  />);
  getByTestId('password-icon').click();
  expect(mockFunction).toHaveBeenCalledTimes(2);
});
