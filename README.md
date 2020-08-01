# lp-react-components

[![NPM](https://img.shields.io/npm/v/lp-react-components.svg)](https://www.npmjs.com/package/lp-react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install in your own project

To add this set of components to your project

```bash
npm i lp-react-components
```

Then you can import the components like this

```jsx
import React from 'react'

import { MyComponent }  from 'lp-react-components'

const Component = () => <MyComponent someProperty="some-value"/>
```

See the [styleguide](https://pkibbey.github.io/lp-react-components/styleguide) or [storybook](https://pkibbey.github.io/lp-react-components/storybook) for all the components

## Development on this repo

To make change to this repo, or test it locally, first clone this repo and then

```bash
npm i
```

### Running the styleguide

To run the styleguide locally

```bash
npm run styleguide
```

### Running the storybook

To test the storybook locally

```bash
npm run storybook
```

### Testing the project

You can run the unit tests by running

```bash
npm run test
```

or if you want to see code coverage for the project

```bash
npm run coverage
```

## Branching strategy

1. Branch off master (prefix the repo with either **feature/** or **bug/** )
2. Create a PR back to master
3. Get PR approved then merge it

## Deploying documentation

To deploy the documentation ([styleguide](https://pkibbey.github.io/lp-react-components/styleguide) and [storybook](https://pkibbey.github.io/lp-react-components/storybook)) to github pages

```bash
  npm run deploy
```

## Updating the npm package

If any changes are made to the components, we will need to update the version. Make sure all your changes have been committed to the repo before running

```bash
npm version patch
```

To publish the package to npm to make it available for other projects
```bash
npm publish
```

## License

MIT © [pkibbey](https://github.com/pkibbey)
