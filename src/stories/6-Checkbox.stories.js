import React from 'react'
import Checkbox from '../components/Checkbox'
import ThemeWrapper from '../components/ThemeWrapper'
import theme from '../theme'

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: 'white' },
        { name: 'dark', value: theme.colors.navyGray }
      ]
    }
  },
  argTypes: {
    label: { defaultValue: 'checkbox label' },
    state: { defaultValue: 'default' },
    variant: { defaultValue: 'light' },
    handleChange: { action: 'changed', table: { disable: true } }
  }
}

export const Light = (args) => (
  <ThemeWrapper>
    <Checkbox {...args} />
  </ThemeWrapper>
)

export const Dark = (args) => (
  <ThemeWrapper>
    <Checkbox {...args} />
  </ThemeWrapper>
)

Dark.args = {
  variant: 'dark'
}

Dark.parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: 'white' },
      { name: 'dark', value: theme.colors.navyGray }
    ]
  }
}
