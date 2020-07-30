import React from 'react'
import Loader from '../src/Loader'
import { withKnobs, select } from '@storybook/addon-knobs'
import theme from '../src/assets/theme'

export default {
  title: 'Loader',
  component: Loader,
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'light', value: '#FFF' },
      { name: 'dark', value: theme.colors.darkNavy, default: true }
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
