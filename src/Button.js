import React from 'react'
import { Button as RebassButton } from 'rebass'
import Loader from './Loader'
import theme from './assets/theme'

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
        transition: 'all 2s',
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
        transition: 'all 2s',
        '&:hover': {
          backgroundColor: theme.colors.electricBlueHover
        }
      }
  }
}

const Button = ({ isLoading, handleClick, label, variant, ...otherProps }) => (
  <RebassButton onClick={handleClick} sx={getStyles(variant)} {...otherProps}>
    {isLoading ? (
      <Loader size={variant !== 'default' ? 'small' : 'default'} />
    ) : (
      label
    )}
  </RebassButton>
)

export default Button
