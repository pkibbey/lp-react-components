import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectField from '../components/SelectField';
import { getCountries } from '../utils';

const mockFunction = jest.fn();

test('renders a select field', () => {
  render(<SelectField
    name="test"
    value="test"
    updateUserDetail={mockFunction}
    updateError={mockFunction}
    error={{}}
    countries={getCountries()}
  />);
  expect(mockFunction).not.toHaveBeenCalled();
});

test('renders a select field with an error', () => {
  render(<SelectField
    name="test"
    value="test"
    updateUserDetail={mockFunction}
    updateError={mockFunction}
    error={{ isError: true }}
    countries={getCountries()}
  />);
  expect(mockFunction).not.toHaveBeenCalled();
});

test('select field change event is fired', () => {
  const { getByTestId } = render(<SelectField
    name="test"
    value="test"
    updateUserDetail={mockFunction}
    updateError={mockFunction}
    error={{}}
    countries={getCountries()}
  />);
  fireEvent.change(getByTestId('select-field-test'), { target: { value: 'new-value' } });
  expect(mockFunction).toHaveBeenCalled();
});

test('select field blur event is fired', () => {
  const { getByTestId } = render(<SelectField
    name="test"
    value="test"
    updateUserDetail={mockFunction}
    updateError={mockFunction}
    error={{}}
    countries={getCountries()}
  />);
  fireEvent.blur(getByTestId('select-field-test'));
  expect(mockFunction).toHaveBeenCalled();
});
