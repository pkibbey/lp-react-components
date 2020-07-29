import { addDecorator } from "@storybook/react"
import themeDecorator from "./themeDecorator"
import { addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y'

addParameters({
  decorators: [withA11y, themeDecorator],
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ]
});
