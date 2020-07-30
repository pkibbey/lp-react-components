import React from 'react'
import LoadingIcon from './assets/LoadingIcon'

const convertSizetoPx = (size) => {
  switch (size) {
    case 'small':
      return 18
    case 'large':
      return 40
    default:
      return 24
  }
}

const Loader = ({ size, variant }) => (
  <LoadingIcon
    data-testid='loader'
    variant={variant}
    height={convertSizetoPx(size)}
    width={convertSizetoPx(size)}
  />
)

export default Loader
