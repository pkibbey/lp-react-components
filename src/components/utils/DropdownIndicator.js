import React from 'react'
import { Flex } from '@theme-ui/components'
import DropdownIcon from './DropdownIcon'

export default function DropdownIndicator(props) {
  return (
    <Flex sx={{ padding: '7px 8px 9px 8px' }}>
      <DropdownIcon {...props} />
    </Flex>
  )
}
