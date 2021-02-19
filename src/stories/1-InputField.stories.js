import React from 'react'
import InputField from '../components/InputField'
import ThemeWrapper from '../components/ThemeWrapper'

export default {
  title: 'InputField',
  component: InputField,
  argTypes: {
    shouldFocusOnLoad: { defaultValue: true },
    isFullWidth: { defaultValue: false },
    disabled: { defaultValue: false },
    type: { defaultValue: 'text' },
    placeholder: { defaultValue: 'text input field' },
    value: { defaultValue: '' },
    handleChange: { action: 'changed', table: { disable: true } },
    handleClick: { action: 'clicked', table: { disable: true } }
  }
}

export const Default = (args) => (
  <ThemeWrapper>
    <InputField {...args} />
  </ThemeWrapper>
)

export const DefaultWithErrors = (args) => (
  <ThemeWrapper>
    <InputField {...args} />
  </ThemeWrapper>
)

DefaultWithErrors.args = {
  shouldFocusOnLoad: false,
  placeholder: 'text input field with error',
  error: {
    isError: true,
    hasInteracted: true,
    message: 'Invalid value',
    requirements: {
      name: 'title',
      data: [
        { name: 'item 1', isError: true, shouldIndent: true },
        { name: 'item 2', isError: false, shouldIndent: true },
        { name: 'item 3', isError: true, shouldIndent: true }
      ]
    }
  }
}
