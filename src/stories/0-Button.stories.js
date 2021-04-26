import React from 'react'
import Button from '../components/Button'
import theme from '../theme'
import ThemeWrapper from './ThemeWrapper'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'white' },
        { name: 'dark', value: theme.colors.navyGray }
      ]
    }
  },
  argTypes: {
    handleClick: { action: 'clicked', table: { disable: true } },
    label: { defaultValue: 'button label' },
    isLoading: { defaultValue: false },
    isFullWidth: { defaultValue: false },
    variant: { defaultValue: 'primary' }
  }
}

// TODO: move the theme wrapper out of the components and into the stories.
// This should probably help resolve the bundle size

export const Primary = (args) => (
  <ThemeWrapper>
    <Button {...args} />
  </ThemeWrapper>
)

export const Secondary = (args) => (
  <ThemeWrapper>
    <Button {...args} />
  </ThemeWrapper>
)

Secondary.args = {
  variant: 'secondary'
}

Secondary.parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'light', value: 'white' },
      { name: 'dark', value: theme.colors.navyGray }
    ]
  }
}
