import React from 'react'
import { LoadingDots } from '..'
import theme from '../theme'

export default {
  title: 'LoadingDots',
  component: LoadingDots,
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
    variant: { defaultValue: 'light' }
  }
}

export const Light = (args) => <LoadingDots {...args} />

export const Dark = (args) => <LoadingDots {...args} />

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
