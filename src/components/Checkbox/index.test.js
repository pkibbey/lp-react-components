import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from './'

it('renders a checkbox', () => {
  const tree = renderer.create(<Checkbox />).toJSON()
  expect(tree).toMatchSnapshot()
})
