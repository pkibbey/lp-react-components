import React from 'react'
import LoadingDots from '../src/LoadingDots'

export default {
  title: 'LoadingDots',
  component: LoadingDots,
  parameters: {
    backgrounds: [
      { name: 'light', value: '#FFF' },
      { name: 'dark navy', value: '#04051F', default: true }
    ]
  }
}

export const Default = () => <LoadingDots />
