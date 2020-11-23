import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Checkbox from './'

const TEST_LABEL = 'test label'

it('renders an unchecked checkbox', () => {
  const { container } = render(<Checkbox />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox.checked).toBe(false)
})

it('renders a checked checkbox', () => {
  const { container } = render(<Checkbox state='checked' />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox.checked).toBe(true)
})

it('renders a checkbox with an error', () => {
  const { container } = render(<Checkbox state='error' />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox.checked).toBe(false)
})

it('renders a checkbox with a label', () => {
  const { container } = render(<Checkbox label={TEST_LABEL} variant='dark' />)
  const label = screen.getByText(TEST_LABEL)
  expect(label).toBeInTheDocument()
})

it('toggles the checkbox highlight on focus and blur', () => {
  const { container } = render(<Checkbox />)
  const checkbox = screen.getByRole('checkbox')
  checkbox.focus()
  expect(checkbox.matches(':focus')).toBe(true)
  checkbox.blur()
  expect(checkbox.matches(':focus')).toBe(false)
})
