import React from 'react'
import { InputField } from '../components'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

export default {
  title: 'InputField',
  component: InputField,
  decorators: [withKnobs]
}

const INPUT_OPTIONS = ['password', 'email', 'text']

export const Default = () => (
  <InputField
    shouldFocusOnLoad={boolean('shouldFocusOnLoad', true)}
    isFullWidth={boolean('isFullWidth', false)}
    disabled={boolean('disabled', false)}
    name='default'
    type={select('type', INPUT_OPTIONS, 'text')}
    placeholder={text('placeholder', 'text input field')}
    value={text('value', '')}
    handleChange={action('handleChange')}
    handleClick={action('handleClick')}
  />
)

export const DefaultWithErrors = () => (
  <InputField
    shouldFocusOnLoad={boolean('shouldFocusOnLoad', false)}
    isFullWidth={boolean('isFullWidth', false)}
    disabled={boolean('disabled', false)}
    name='input-with-errors'
    type={select('type', INPUT_OPTIONS, 'text')}
    placeholder={text('placeholder', 'text input field with error')}
    value={text('value', '')}
    handleChange={action('handleChange')}
    error={{
      isError: true,
      hasInteracted: true,
      message: 'Invalid value',
      requirements: {
        name: 'title',
        data: [
          { name: 'item 1', isError: true, shouldIndent: true },
          { name: 'item 2', isError: false, shouldIndent: true },
          { name: 'item 3', isError: true, shouldIndent: true }
        ]
      }
    }}
    handleClick={action('handleClick')}
  />
)
