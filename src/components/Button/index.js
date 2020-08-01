import React from 'react'
import { Button as RebassButton } from 'rebass'
import Loader from '../Loader/'
import theme from '../../theme'
import PropTypes from 'prop-types'

const getStyles = (variant) => {
  switch (variant) {
    case 'secondary':
      return {
        fontSize: theme.fontSizes[0],
        fontFamily: '"Roboto", sans-serif',
        fontWeight: 700,
        padding: '0 24px',
        height: '32px',
        borderRadius: 32,
        cursor: 'pointer',
        backgroundColor: theme.colors.lighterGray,
        color: 'darkGray',
        WebkitFontSmoothing: 'antialiased',
        textDecoration: 'none',
        transition: 'all .2s',
        '&:hover': {
          backgroundColor: theme.colors.lightGray,
          color: 'darkerGray'
        }
      }
    default:
      return {
        fontSize: theme.fontSizes[2],
        fontFamily: '"Roboto", sans-serif',
        fontWeight: 700,
        height: '62px',
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 32,
        letterSpacing: '0.008em',
        cursor: 'pointer',
        backgroundColor: theme.colors.electricBlue,
        color: 'white',
        WebkitFontSmoothing: 'antialiased',
        maxWidth: '100%',
        whiteSpace: 'nowrap',
        width: '100%',
        transition: 'all .2s',
        '&:hover': {
          backgroundColor: theme.colors.electricBlueHover
        }
      }
  }
}

/**
 * Used to provide call-to-action elements
 */
const Button = ({ isLoading, handleClick, label, variant, ...otherProps }) => (
  <RebassButton onClick={handleClick} sx={getStyles(variant)} {...otherProps}>
    {isLoading ? (
      <Loader
        size={variant === 'primary' ? 'default' : 'small'}
        variant={variant === 'secondary' ? 'dark' : 'light'}
      />
    ) : (
      label
    )}
  </RebassButton>
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
