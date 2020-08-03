import { addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

addParameters({
  decorators: [withA11y]
})
