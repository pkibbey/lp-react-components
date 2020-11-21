import React from 'react'
import { Button } from '..'
import theme from '../theme'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'white' },
        { name: 'dark', value: theme.colors.navyGray }
      ]
    }
  },
  argTypes: {
    handleClick: { action: 'clicked' },
    label: { defaultValue: 'button label' },
    isLoading: { defaultValue: false },
    isFullWidth: { defaultValue: false }
  }
}

export const Primary = (args) => <Button {...args} />

Primary.args = {
  variant: 'primary'
}

export const Secondary = (args) => <Button {...args} />

Secondary.args = {
  variant: 'secondary'
}

Secondary.parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'light', value: 'white' },
      { name: 'dark', value: theme.colors.navyGray }
    ]
  }
}
