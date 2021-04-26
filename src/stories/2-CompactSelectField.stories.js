import { Box } from '@theme-ui/components'
import React from 'react'
import CompactSelectField from '../components/CompactSelectField'
import ThemeWrapper from './ThemeWrapper'

export default {
  title: 'CompactSelectField',
  component: CompactSelectField,
  args: {
    options: [
      { label: 'English (US)', value: 'value 1' },
      { label: 'Español', value: 'value 6' }
    ],
    placeholder: 'test placeholder',
    defaultValue: null,
    maxOptions: 5,
    autoFocus: true,
    optionsAbove: false,
    isSearchable: true,
    allowCreateOptions: true
  }
}

const Template = (args) => (
  <ThemeWrapper>
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        flex: 1
      }}
    >
      <CompactSelectField {...args} />
    </div>
  </ThemeWrapper>
)

export const Default = Template.bind({})
Default.args = {
  name: 'compact-select-field',
  allowCreateOptions: false,
  alignRight: true,
  justifyRight: false
}

export const DefaultAlt = Template.bind({})
DefaultAlt.args = {
  name: 'compact-select-field-alt',
  allowCreateOptions: false,
  alignRight: true,
  justifyRight: false,
  variant: 'alt'
}
DefaultAlt.parameters = {
  backgrounds: { default: 'dark' }
}
