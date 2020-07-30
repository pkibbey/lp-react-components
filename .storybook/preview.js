import { addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y'

addParameters({
  decorators: [withA11y],
  backgrounds: [
    { name: 'light', value: '#FFF', default: true },
    { name: 'dark navy', value: '#04051F' },
  ]
});
