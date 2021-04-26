import React from 'react'
import TextField from '../components/TextField'
import ThemeWrapper from './ThemeWrapper'

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    shouldFocusOnLoad: { defaultValue: true },
    isFullWidth: { defaultValue: false },
    disabled: { defaultValue: false },
    placeholder: { defaultValue: 'text field' },
    value: { defaultValue: '' },
    handleChange: { action: 'changed', table: { disable: true } },
    handleClick: { action: 'clicked', table: { disable: true } }
  }
}

const Template = (args) => (
  <ThemeWrapper>
    <TextField {...args} />
  </ThemeWrapper>
)

export const Default = Template.bind({})
Default.args = {}

export const DefaultWithErrors = Template.bind({})
DefaultWithErrors.args = {
  shouldFocusOnLoad: false,
  placeholder: 'text field with error',
  isFullWidth: true,
  disabled: true,
  error: {
    isError: true,
    hasInteracted: true,
    message: 'Invalid value'
  }
}
