import { addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { version } from "../package.json"

// Add console log to check version in live docs
console && console.log && console.log(`loading components - version ${version}`);

addParameters({
  decorators: [withA11y]
})
