import React from 'react'
import LoadingDots from '../components/LoadingDots'
import theme from '../theme'
import { withKnobs, select } from '@storybook/addon-knobs'

export default {
  title: 'LoadingDots',
  component: LoadingDots,
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'light', value: 'white' },
      { name: 'dark', value: theme.colors.navyGray, default: true }
    ]
  }
}

export const Light = () => (
  <LoadingDots variant={select('variant', ['light', 'dark'], 'light')} />
)

export const Dark = () => (
  <LoadingDots variant={select('variant', ['light', 'dark'], 'dark')} />
)
Dark.story = {
  parameters: {
    backgrounds: [
      { name: 'light', value: 'white', default: true },
      { name: 'dark', value: theme.colors.navyGray }
    ]
  }
}
