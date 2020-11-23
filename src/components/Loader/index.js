import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme'
import Spinner from 'react-spinner-material'

const convertSizeToPx = (size) => {
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
 * Used to convey to the user that something is happening, usually an asynchronous network call
 */
const Loader = ({ size, variant }) => (
  <Spinner
    radius={convertSizeToPx(size)}
    stroke={2}
    color={variant === 'dark' ? theme.colors.darkGray : 'white'}
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
  variant: 'light',
  timeout: undefined
}

export default Loader
