import { Box } from '@theme-ui/components'
import React from 'react'
import SelectField from '../components/SelectField'
import ThemeWrapper from './ThemeWrapper'

export default {
  title: 'SelectField',
  component: SelectField,
  args: {
    options: [
      { label: 'Option 1', value: 'value 1' },
      {
        label:
          'Option 2 - Ultra long option that extends past the available space and therefore truncates the text with ellipsis',
        value: 'value 2'
      },
      { label: 'Option 3', value: 'value 3' },
      { label: 'Option 4', value: 'value 4' },
      { label: 'Option 5', value: 'value 5' },
      { label: 'Option 6', value: 'value 6' }
    ],
    placeholder: 'test placeholder',
    defaultValue: null,
    maxOptions: 5,
    autoFocus: true,
    optionsAbove: false,
    isSearchable: true,
    allowCreateOptions: true,
    isFullWidth: true
  }
}

const Template = (args) => (
  <ThemeWrapper>
    <div
      style={{
        margin: args.optionsAbove ? '200px 0' : '0',
        width: '100%'
      }}
    >
      <SelectField {...args} />
    </div>
  </ThemeWrapper>
)

export const Default = Template.bind({})
Default.args = {
  name: 'select-field',
  allowCreateOptions: false
}

export const ForceFocus = Template.bind({})
ForceFocus.args = {
  name: 'select-field-force-focus',
  forceFocus: true,
  autoFocus: false
}

export const OptionsAbove = Template.bind({})
OptionsAbove.args = {
  name: 'select-field-above',
  optionsAbove: true
}

export const WithErrors = Template.bind({})
WithErrors.args = {
  name: 'select-field-with-errors',
  isFullWidth: true,
  error: {
    isError: true,
    hasInteracted: true,
    message: 'Invalid value'
  }
}
