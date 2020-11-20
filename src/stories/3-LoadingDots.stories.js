import React from 'react'
import { LoadingDots } from '..'
import theme from '../theme'
import { withKnobs, select } from '@storybook/addon-knobs'

export default {
  title: 'LoadingDots',
  component: LoadingDots,
  decorators: [withKnobs],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: 'white' },
        { name: 'dark', value: theme.colors.navyGray }
      ]
    }
  }
}

export const Light = () => (
  <LoadingDots variant={select('variant', ['light', 'dark'], 'light')} />
)

export const Dark = () => (
  <LoadingDots variant={select('variant', ['light', 'dark'], 'dark')} />
)

Dark.parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: 'white' },
      { name: 'dark', value: theme.colors.navyGray }
    ]
  }
}
