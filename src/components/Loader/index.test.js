import React from 'react'
import renderer from 'react-test-renderer'
import Loader from './'

it('renders a default loader', () => {
  const tree = renderer.create(<Loader />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders a small loader', () => {
  const tree = renderer.create(<Loader size='small' />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders a large loader', () => {
  const tree = renderer.create(<Loader size='large' />).toJSON()
  expect(tree).toMatchSnapshot()
})
