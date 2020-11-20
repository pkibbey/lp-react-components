import React from 'react'
import { Loader } from '..'
import { withKnobs, select } from '@storybook/addon-knobs'
import theme from '../theme'

export default {
  title: 'Loader',
  component: Loader,
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
  <Loader
    size={select('size', ['default', 'small', 'large'], 'default')}
    variant={select('style', ['light', 'dark'], 'light')}
  />
)

export const Dark = () => (
  <Loader
    size={select('size', ['default', 'small', 'large'], 'default')}
    variant={select('style', ['light', 'dark'], 'dark')}
  />
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
