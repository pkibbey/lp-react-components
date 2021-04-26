import React from 'react'
import { Text } from 'theme-ui'
import PropTypes from 'prop-types'

/**
 * Used to render an error message.
 *
 * @visibleName Error Text
 */
const ErrorText = ({ error, ...otherProps }) =>
  error.isError && error.hasInteracted ? (
    <Text variant='errorText' {...otherProps}>
      {error.message}
    </Text>
  ) : null

ErrorText.propTypes = {
  /** An object describing the error */
  error: PropTypes.shape({
    isError: PropTypes.bool,
    hasInteracted: PropTypes.bool,
    message: PropTypes.string
  })
}

ErrorText.defaultProps = {
  error: {}
}

export default ErrorText
