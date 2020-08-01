# react-ui-components

> (Reusable React components)

[![NPM](https://img.shields.io/npm/v/react-ui-components.svg)](https://www.npmjs.com/package/react-ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-ui-components
```

## Usage

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

## Deploying documentation

To deploy the documentation to github pages, run this

```
  npm run deploy
```

## Updating the npm module

First of all we need to update the version. Make sure all your changes have been committed to the repo

```
  npm run deploy
```

## Branching strategy

Branch off master (prefixing the repo with either **feature/** or **bug/** )
Create a PR back to master
Get PR approved

npm version patch

## License

MIT © [pkibbey](https://github.com/pkibbey)
