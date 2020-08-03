import React from 'react'
import { Button as RebassButton } from 'rebass'
import Loader from '../Loader/'
import PropTypes from 'prop-types'
import ThemeWrapper from '../ThemeWrapper'

/**
 * Used to provide call-to-action elements
 */
const Button = ({ isLoading, handleClick, label, variant, ...otherProps }) => (
  <ThemeWrapper>
    <RebassButton onClick={handleClick} variant={variant} {...otherProps}>
      {isLoading ? (
        <Loader
          size={variant === 'primary' ? 'default' : 'small'}
          variant={variant === 'secondary' ? 'dark' : 'light'}
        />
      ) : (
        label
      )}
    </RebassButton>
  </ThemeWrapper>
)

Button.propTypes = {
  /** The button label */
  label: PropTypes.string,
  /** A callback to fire when the button is clicked */
  handleClick: PropTypes.func,
  /** A variant for the button */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** if this is true, it shows a loading animation in the button */
  isLoading: PropTypes.bool
}

Button.defaultProps = {
  label: '',
  handleClick: () => {},
  variant: 'primary',
  isLoading: false
}

export default Button
