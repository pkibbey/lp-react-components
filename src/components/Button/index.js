import React from 'react'
import { Box, Text, Button as ThemeUIButton } from 'theme-ui'
import Loader from '../Loader/'
import PropTypes from 'prop-types'

/**
 * Used to provide call-to-action elements
 */
const Button = ({
  isLoading,
  handleClick,
  label,
  variant,
  isFullWidth,
  ...otherProps
}) => (
  <ThemeUIButton
    onClick={handleClick}
    sx={{
      width: isFullWidth ? '100%' : 'auto',
      position: 'relative',
      variant: variant
    }}
    {...otherProps}
  >
    {isLoading && (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Loader
          size={variant === 'primary' ? 'default' : 'small'}
          variant={variant === 'secondary' ? 'dark' : 'light'}
        />
      </Box>
    )}
    <Text sx={{ opacity: isLoading ? 0 : 1 }}>{label}</Text>
  </ThemeUIButton>
)

Button.propTypes = {
  /** The button label */
  label: PropTypes.string,
  /** A callback to fire when the button is clicked */
  handleClick: PropTypes.func,
  /** A variant for the button */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** if this is true, it shows a loading animation in the button */
  isLoading: PropTypes.bool,
  /** if this is true, it shows a loading animation in the button */
  isFullWidth: PropTypes.bool
}

Button.defaultProps = {
  label: '',
  handleClick: undefined,
  variant: 'primary',
  isLoading: false,
  isFullWidth: false
}

export default Button
