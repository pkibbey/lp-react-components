import React, { StrictMode } from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

const ThemeWrapper = ({ children }) => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StrictMode>
  )
}

export default ThemeWrapper
