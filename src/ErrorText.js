import React from 'react'
import { Text } from 'rebass'
import theme from './assets/theme'

const ErrorText = ({ error }) =>
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
      mb={3}
    >
      {error.message}
    </Text>
  ) : null
export default ErrorText
