import React from 'react'
import renderer from 'react-test-renderer'
import LoadingDots from './'

it('renders default loading dots', () => {
  const tree = renderer.create(<LoadingDots />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders dark loading dots', () => {
  const tree = renderer.create(<LoadingDots variant='dark' />).toJSON()
  expect(tree).toMatchSnapshot()
})
