import React from 'react'
import LoadingIcon from './LoadingIcon'
import PropTypes from 'prop-types'

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

/**
 * Used to convey to the user that something is happening, usually an asyncronous network call
 */
const Loader = ({ size, variant }) => (
  <LoadingIcon
    data-testid='loader'
    variant={variant}
    height={convertSizetoPx(size)}
    width={convertSizetoPx(size)}
  />
)

Loader.propTypes = {
  /** The size of the loader */
  size: PropTypes.oneOf(['small', 'large', 'default']),
  /** A variant for the loader */
  variant: PropTypes.oneOf(['light', 'dark'])
}

Loader.defaultProps = {
  size: 'default',
  variant: 'light'
}

export default Loader
