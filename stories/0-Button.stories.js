import React from 'react'
import Button from '../src/components/Button'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
}

const BUTTON_OPTIONS = ['primary', 'secondary']

export const Primary = () => (
  <Button
    isFullWidth={boolean('isFullWidth', false)}
    isLoading={boolean('isLoading', false)}
    handleClick={action('handleClick')}
    label={text('label', 'button label')}
    variant={select('variant', BUTTON_OPTIONS, 'primary')}
  />
)

export const Secondary = () => (
  <Button
    isFullWidth={boolean('isFullWidth', false)}
    isLoading={boolean('isLoading', false)}
    handleClick={action('handleClick')}
    label={text('label', 'button label')}
    variant={select('variant', BUTTON_OPTIONS, 'secondary')}
  />
)
