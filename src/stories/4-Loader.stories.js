import React from 'react'
import { Loader } from '..'
import { withKnobs, select } from '@storybook/addon-knobs'
import theme from '../theme'

export default {
  title: 'Loader',
  component: Loader,
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'light', value: 'white' },
      { name: 'dark', value: theme.colors.navyGray, default: true }
    ]
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
Dark.story = {
  parameters: {
    backgrounds: [
      { name: 'light', value: 'white', default: true },
      { name: 'dark', value: theme.colors.navyGray }
    ]
  }
}
