import React from 'react'
import Modal from '../components/Modal'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    closeModal: { table: { disable: true } },
    bgColor: 'rgb(0,0,0,0.75)',
    children: {
      table: { disable: true },
      defaultValue: (
        <h3
          style={{
            color: 'white',
            border: '1px solid white',
            padding: '40px',
            backgroundColor: 'rgba(255,255,255,0.2)'
          }}
        >
          Modal content
        </h3>
      )
    }
  }
}

export const Default = (args) => (
  <Modal {...args}>
    <h3
      style={{
        color: 'white',
        border: '1px solid white',
        padding: '40px',
        backgroundColor: 'rgba(255,255,255,0.2)'
      }}
    >
      Modal content
    </h3>
  </Modal>
)
