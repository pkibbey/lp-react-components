import React from 'react'
import Checkbox from '../src/components/Checkbox'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import theme from '../src/theme'

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'light', value: 'white' },
      { name: 'dark', value: theme.colors.navyGray, default: true }
    ]
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
Dark.story = {
  parameters: {
    backgrounds: [
      { name: 'light', value: 'white', default: true },
      { name: 'dark', value: theme.colors.navyGray }
    ]
  }
}
