import React from 'react'
import { Text } from 'rebass'
import theme from '../../theme'
import PropTypes from 'prop-types'

/**
 * Used to render an error message.
 *
 * @visibleName Error Text
 */
const ErrorText = ({ error, ...otherProps }) =>
  error.isError && error.hasInteracted ? (
    <Text
      sx={{
        fontSize: theme.fontSizes[0],
        fontFamily: '"Roboto", sans-serif',
        lineHeight: '20px',
        color: theme.colors.red,
        WebkitFontSmoothing: 'antialiased',
        maxWidth: ['100%', '100%', 414]
      }}
      {...otherProps}
    >
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
