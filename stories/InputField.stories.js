import React from 'react'
import { action } from '@storybook/addon-actions'
import InputField from '../src/InputField'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

export default {
  title: 'InputField',
  component: InputField,
  decorators: [withKnobs]
}

export const Default = () => (
  <InputField
    isFirst={boolean('isFirst', false)}
    isMultiple={boolean('isMultiple', false)}
    name={select('name', ['default', 'password', 'email'], 'default')}
    placeholder={boolean('placeholder', 'placeholder')}
    value={boolean('value', '')}
    updateUserDetail={action('updateUserDetail')}
    error={{}}
    updateError={action('updateError')}
  />
)

export const WithError = () => (
  <InputField
    isFirst={boolean('isFirst', false)}
    isMultiple={boolean('isMultiple', false)}
    name={select('name', ['default', 'password', 'email'], 'email')}
    placeholder={boolean('placeholder', 'placeholder')}
    value={text('value', '')}
    updateUserDetail={action('updateUserDetail')}
    error={{
      isError: true,
      isInteracted: true,
      message: 'An error happened'
    }}
    updateError={action('updateError')}
  />
)
