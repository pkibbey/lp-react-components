import React from 'react'
import { Text } from 'rebass'
import PropTypes from 'prop-types'
import ThemeWrapper from '../ThemeWrapper'

/**
 * Used to render an error message.
 *
 * @visibleName Error Text
 */
const ErrorText = ({ error, ...otherProps }) =>
  error.isError && error.hasInteracted ? (
    <ThemeWrapper>
      <Text variant='errorText' {...otherProps}>
        {error.message}
      </Text>
    </ThemeWrapper>
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
