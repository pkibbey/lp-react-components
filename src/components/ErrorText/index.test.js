import React from 'react'
import renderer from 'react-test-renderer'
import ErrorText from './'

it('renders error text when there is no error', () => {
  const tree = renderer
    .create(<ErrorText error={{ isError: false, message: 'test' }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders error text when there is an error', () => {
  const tree = renderer
    .create(
      <ErrorText
        error={{ isError: true, hasInteracted: true, message: 'test' }}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders recaptcha error text when there is an error', () => {
  const tree = renderer
    .create(<ErrorText error={{ isError: true, message: 'test' }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
