import React from 'react'
import SelectField from '../components/SelectField'
import ThemeWrapper from '../components/ThemeWrapper'

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

export const Default = (args) => (
  <ThemeWrapper>
    <SelectField {...args} />
  </ThemeWrapper>
)

export const DefaultWithErrors = (args) => (
  <ThemeWrapper>
    <SelectField {...args} />
  </ThemeWrapper>
)

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
