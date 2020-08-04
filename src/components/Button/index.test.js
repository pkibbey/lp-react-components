import React from 'react'
import renderer from 'react-test-renderer'
import Button from './'

it('renders a default button', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders a loading button', () => {
  const tree = renderer.create(<Button isLoading />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders a wide button', () => {
  const tree = renderer.create(<Button isFullWidth />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders a secondary button', () => {
  const tree = renderer
    .create(<Button isLoading variant='secondary' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
