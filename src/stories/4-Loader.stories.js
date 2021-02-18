import React from 'react'
import Loader from '../components/Loader'
import theme from '../theme'

export default {
  title: 'Loader',
  component: Loader,
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
    size: 'default',
    variant: 'light'
  }
}

export const Default = (args) => <Loader {...args} />

export const Large = (args) => <Loader {...args} />

Large.args = {
  size: 'large',
  variant: 'dark'
}

Large.parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: 'white' },
      { name: 'dark', value: theme.colors.navyGray }
    ]
  }
}

export const Small = (args) => <Loader {...args} />

Small.args = {
  size: 'small',
  variant: 'light'
}
