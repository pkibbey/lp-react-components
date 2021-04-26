import React from 'react'
import { Flex } from '@theme-ui/components'
import CheckIcon from './CheckIcon'
import theme from '../../theme'

export default function Option(props) {
  const { isAltVariant } = props.selectProps
  const textColor = isAltVariant ? theme.colors.midGrey : theme.colors.darkGray
  const selectedColor = isAltVariant ? 'white' : theme.colors.navy
  const bgColor = isAltVariant ? theme.colors.navy : 'white'
  const selectedBgColor = isAltVariant ? '#313055' : theme.colors.lighterGray

  return (
    <Flex
      px={3}
      py={9}
      sx={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: props.isSelected ? selectedBgColor : bgColor,
        color: props.isSelected ? selectedColor : textColor,
        cursor: 'default',
        display: 'block',
        fontSize: '.875rem',
        width: '100%',
        userSelect: 'none',
        boxSizing: 'border-box',
        fontFamily: '"Roboto", sans-serif',
        lineHeight: '22px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: selectedBgColor
        }
      }}
      onClick={() => props.selectOption(props.data)}
    >
      {props.children}
      {props.isSelected && <CheckIcon isAltVariant={isAltVariant} />}
    </Flex>
  )
}
