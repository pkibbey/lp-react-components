import React from 'react'
import LoadingDots from '../components/LoadingDots'
import ThemeWrapper from '../components/ThemeWrapper'
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

export const Light = (args) => (
  <ThemeWrapper>
    <LoadingDots {...args} />
  </ThemeWrapper>
)

export const Dark = (args) => (
  <ThemeWrapper>
    <LoadingDots {...args} />
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
