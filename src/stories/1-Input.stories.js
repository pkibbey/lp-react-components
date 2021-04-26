import React from 'react'
import Input from '../components/Input'
import ThemeWrapper from './ThemeWrapper'

// TODO: figure out how to define storybook component arguments properly

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    shouldFocusOnLoad: { defaultValue: true },
    isErrored: { defaultValue: false },
    disabled: { defaultValue: false },
    type: { defaultValue: 'text' },
    placeholder: { defaultValue: 'text input field' },
    value: { defaultValue: '' },
    handleChange: { action: 'changed', table: { disable: true } },
    handleClick: { action: 'clicked', table: { disable: true } },
    handleFocus: { action: 'focused', table: { disable: true } }
  },
  args: {
    name: 'test',
    shouldFocusOnLoad: true,
    isErrored: false,
    disabled: false,
    type: 'text',
    placeholder: 'text input',
    value: '',
    handleChange: () => {},
    handleClick: () => {},
    handleFocus: () => {}
  }
}

export const Default = (args) => (
  <ThemeWrapper>
    <Input {...args} />
  </ThemeWrapper>
)

export const DefaultWithErrors = (args) => (
  <ThemeWrapper>
    <Input {...args} />
  </ThemeWrapper>
)

DefaultWithErrors.args = {
  shouldFocusOnLoad: false,
  isErrored: true,
  disabled: false,
  type: 'text',
  placeholder: 'text input',
  value: '',
  handleChange: { action: 'changed', table: { disable: true } },
  handleClick: { action: 'clicked', table: { disable: true } },
  handleFocus: { action: 'focused', table: { disable: true } }
}
