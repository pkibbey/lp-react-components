import React, { StrictMode } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@emotion/react'

import theme from '../theme'

/**
 * Used to provide a theme to all the components
 *
 * @visibleName Theme Wrapper
 */
const ThemeWrapper = ({ children }) => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StrictMode>
  )
}

ThemeWrapper.propTypes = {
  /** The children to be wrapped by the theme */
  children: PropTypes.node
}

ThemeWrapper.defaultProps = {
  children: null
}

export default ThemeWrapper
