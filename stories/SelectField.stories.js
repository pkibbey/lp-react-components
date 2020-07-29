import React from 'react'
import { action } from '@storybook/addon-actions'
import SelectField from '../src/SelectField'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'SelectField',
  component: SelectField,
  decorators: [withKnobs]
}

export const Default = () => (
  <SelectField
    name={text('name', 'select-field')}
    defaultValue='value 1'
    updateUserDetail={action('updateUserDetail')}
    error='errorMessage'
    updateError={action('updateError')}
    countries={[
      { name: 'option 1', value: 'value 1' },
      { name: 'option 2', value: 'value 2' }
    ]}
  />
)
