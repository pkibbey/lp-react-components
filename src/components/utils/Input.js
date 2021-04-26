import React from 'react'
import { components } from 'react-select'
import { Box } from '@theme-ui/components'
import theme from '../../theme'

export default function Input(props) {
  return (
    <Box data-testid='input' sx={{ color: theme.colors.navyGray }}>
      <components.Input {...props} name={props.selectProps.name} />
    </Box>
  )
}
