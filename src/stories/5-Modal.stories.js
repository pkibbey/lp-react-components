import React from 'react'
import Modal from '../components/Modal'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Modal',
  component: Modal,
  decorators: [withKnobs]
}

export const Default = () => (
  <Modal
    closeModal={action('closeModal')}
    bgColor={text('bgColor', 'rgb(0,0,0,0.75)')}
  >
    <h3
      style={{
        color: 'white',
        border: '2px solid yellow',
        padding: '40px',
        backgroundColor: 'rgba(255,255,255,0.2)'
      }}
    >
      Modal content
    </h3>
  </Modal>
)
