import React from 'react'
import { action } from '@storybook/addon-actions'
import SelectField from '../src/components/SelectField'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import countries from './countries.json'

const sortByLabel = (a, b) => (a.label < b.label ? -1 : 1)

const getCountries = () => countries.sort(sortByLabel)

export default {
  title: 'SelectField',
  component: SelectField,
  decorators: [withKnobs]
}

export const Default = () => (
  <SelectField
    name={text('name', 'select-field')}
    isFullWidth={boolean('isFullWidth', false)}
    defaultValue={text('value', 'value 1')}
    handleChange={action('handleChange')}
    handleBlur={action('handleBlur')}
    options={getCountries()}
  />
)

export const DefaultWithErrors = () => (
  <SelectField
    name={text('name', 'select-field')}
    isFullWidth={boolean('isFullWidth', false)}
    defaultValue={text('value', 'value 1')}
    handleChange={action('handleChange')}
    error={{
      isError: true,
      hasInteracted: true,
      message: 'Invalid value'
    }}
    handleBlur={action('handleBlur')}
    options={getCountries()}
  />
)
