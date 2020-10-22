import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Modal from './'

const TEST_CONTENT = 'test content'
const closeModal = jest.fn()

it('renders a modal with a custom background', () => {
  const { container } = render(<Modal bgColor='red' closeModal={closeModal} />)
  expect(container.firstChild).toHaveStyle({
    backgroundColor: 'red'
  })
})

it('renders a modal with content', () => {
  const { container } = render(
    <Modal closeModal={closeModal}>{TEST_CONTENT}</Modal>
  )
  const content = screen.getByText(TEST_CONTENT)
  expect(content).toBeInTheDocument()
  expect(container.firstChild).toHaveStyle({
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  })
})

it('renders a modal and closes modal', () => {
  const { container } = render(
    <Modal closeModal={closeModal}>{TEST_CONTENT}</Modal>
  )
  const element = container.querySelector('div')

  fireEvent.click(element)

  expect(closeModal).toHaveBeenCalledTimes(1)
})

it('should prevent event propagation', () => {
  render(<Modal closeModal={closeModal}>{TEST_CONTENT}</Modal>)
  const content = screen.getByText(TEST_CONTENT)

  fireEvent.click(content)

  expect(closeModal).toHaveBeenCalledTimes(1)
})
