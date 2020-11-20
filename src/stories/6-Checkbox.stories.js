import React from 'react'
import { Checkbox } from '..'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import theme from '../theme'

export default {
  title: 'Checkbox',
  component: Checkbox,
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
  <Checkbox
    label={text('label', 'Default label')}
    state={select('state', ['default', 'checked', 'error'], 'default')}
    variant={select('style', ['light', 'dark'], 'light')}
    handleChange={action('handleChange')}
  />
)

export const Dark = () => (
  <Checkbox
    label={text('label', 'Default label')}
    state={select('state', ['default', 'checked', 'error'], 'default')}
    variant={select('style', ['light', 'dark'], 'dark')}
    handleChange={action('handleChange')}
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
