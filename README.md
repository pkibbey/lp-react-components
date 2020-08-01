# react-ui-components

> (Reusable React components)

[![NPM](https://img.shields.io/npm/v/react-ui-components.svg)](https://www.npmjs.com/package/react-ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

To add this set of React components, run this in your project

```bash
npm i react-ui-components
```

Then you can import the components like this

```jsx
import React from 'react'

import MyComponent from 'react-ui-components'

const Component = () => <MyComponent someProperty="some-value"/>
```

## Development

To run this locally, clone this repo and run this in the root

```bash
npm run start
```

Here are some more useful commands

```bash
npm run test
npm run test:coverage
npm run styleguide
npm run storybook
```

## Branching strategy

1. Branch off master (prefix the repo with either **feature/** or **bug/** )
2. Create a PR back to master
3. Get PR approved then merge it

## Deploying documentation

To deploy the documentation ([https://react-styleguidist.js.org/](styleguidist) and [https://storybook.js.org/](storybook)) to [https://pkibbey.github.io/react-ui-components/](github pages), run

```bash
  npm run deploy
```

## Updating the npm package

If any changes are made to the components, we will need to update the version. Make sure all your changes have been committed to the repo before running

```bash
npm version patch
```

To publish the package to npm to make it available for other repos, run this
```bash
npm publish
```

## License

MIT © [pkibbey](https://github.com/pkibbey)
