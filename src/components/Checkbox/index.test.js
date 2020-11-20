import React from 'react'
import Checkbox from './'

it('renders a checkbox', () => {
  const { container } = render(<Checkbox />)
  expect(container).toBeEmptyDOMElement()
})
