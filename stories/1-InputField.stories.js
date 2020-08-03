import React from 'react'
import InputField from '../src/components/InputField'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

export default {
  title: 'InputField',
  component: InputField,
  decorators: [withKnobs]
}

const INPUT_OPTIONS = ['default', 'password', 'email', 'firstName', 'lastName']

export const Default = () => (
  <InputField
    shouldFocusOnLoad={boolean('shouldFocusOnLoad', true)}
    isFullWidth={boolean('isFullWidth', false)}
    name='default'
    type={select('type', INPUT_OPTIONS, 'default')}
    placeholder={text('placeholder', 'default input field')}
    value={text('value', '')}
    handleChange={action('handleChange')}
    error={{}}
    handleClick={action('handleClick')}
  />
)

export const DefaultWithErrors = () => (
  <InputField
    shouldFocusOnLoad={boolean('shouldFocusOnLoad', false)}
    isFullWidth={boolean('isFullWidth', false)}
    name='input-with-errors'
    type={select('type', INPUT_OPTIONS, 'default')}
    placeholder={text('placeholder', 'input field with error')}
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
