import React from 'react'
import { Box } from 'rebass'
import { keyframes } from '@emotion/react'
import PropTypes from 'prop-types'
import theme from '../../theme'

const bounce = keyframes`
  from, 10%, 27%, 40%, to {
    transform: translate3d(0,0,0);
  }
  20%, 22% {
    transform: translate3d(0, -8px, 0);
  }
  35% {
    transform: translate3d(0, -4px, 0);
  }
  45% {
    transform: translate3d(0,-1px,0);
  }
`
const LoadingDot = ({ delay, variant }) => (
  <Box
    as='span'
    sx={{
      backgroundColor: variant === 'light' ? 'white' : theme.colors.darkerGray,
      width: '3px',
      height: '3px',
      borderRadius: '50%',
      animationName: bounce,
      animationDuration: '1.5s',
      animationTimingFunction: 'linear',
      animationIterationCount: '3',
      animationDelay: `${delay}s`
    }}
  />
)

/**
 * Used to convey that another user or bot, is typing a message
 *
 * @visibleName Loading Dots
 */
const LoadingDots = ({ variant }) => (
  <Box
    as='span'
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      width: '17px',
      height: '24px',
      marginLeft: '4px'
    }}
  >
    <LoadingDot delay={0} variant={variant} />
    <LoadingDot delay={0.15} variant={variant} />
    <LoadingDot delay={0.3} variant={variant} />
  </Box>
)

LoadingDots.propTypes = {
  /** A variant for the loading dots */
  variant: PropTypes.oneOf(['light', 'dark'])
}

LoadingDots.defaultProps = {
  variant: 'light'
}

export default LoadingDots
