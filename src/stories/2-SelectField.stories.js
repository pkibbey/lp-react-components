import React from 'react'
import SelectField from '../components/SelectField'

export default {
  title: 'SelectField',
  component: SelectField,
  argTypes: {
    isFullWidth: { defaultValue: false },
    name: 'select-field',
    value: { defaultValue: '' },
    handleChange: { action: 'changed', table: { disable: true } },
    handleBlur: { action: 'blurred', table: { disable: true } },
    options: [
      { name: 'option 1', value: 'value 1' },
      { name: 'option 2', value: 'value 2' }
    ]
  }
}

export const Default = (args) => <SelectField {...args} />

export const DefaultWithErrors = (args) => <SelectField {...args} />

DefaultWithErrors.args = {
  name: 'select-field-with-errors',
  value: 'value 2',
  error: {
    isError: true,
    hasInteracted: true,
    message: 'Invalid value'
  },
  handleChange: { action: 'changed', table: { disable: true } },
  handleBlur: { action: 'blurred', table: { disable: true } },
  options: [
    { name: 'option 1', value: 'value 1' },
    { name: 'option 2', value: 'value 2' }
  ]
}
