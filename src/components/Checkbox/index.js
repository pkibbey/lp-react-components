import React, { useState } from 'react'
import { Text, Box } from 'rebass'
import PropTypes from 'prop-types'
import theme from '../../theme'
import ThemeWrapper from '../ThemeWrapper'
import styled from '@emotion/styled'

const Input = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Image = styled.svg`
  box-shadow: 0 0 0 ${({ hasFocus }) => (hasFocus ? 2 : 0)}px
    ${({ variant }) => (variant === 'dark' ? theme.colors.darkGray : 'white')};
`

/**
 * Used to render a checkbox
 *
 * @visibleName Checkbox
 */
const Checkbox = ({ variant, label, state, handleChange, ...otherProps }) => {
  const [hasFocus, setHasFocus] = useState(false)

  const getSVG = () => {
    switch (state) {
      case 'error':
        return (
          <rect
            x='1'
            y='1'
            width='18'
            height='18'
            rx='3'
            fill='#FEECEC'
            stroke='#D72329'
            strokeWidth='2'
          />
        )
      case 'checked':
        return (
          <>
            <rect
              x='1'
              y='1'
              width='18'
              height='18'
              rx='3'
              fill='white'
              stroke='#847970'
              strokeWidth='2'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4.70711 10.071C4.31658 10.4615 4.31658 11.0947 4.70711 11.4852L7.53554 14.3136C7.92606 14.7041 8.55922 14.7041 8.94975 14.3136C8.94998 14.3134 8.95021 14.3131 8.95045 14.3129L15.3137 7.94965C15.7042 7.55912 15.7042 6.92596 15.3137 6.53544C14.9232 6.14491 14.29 6.14491 13.8995 6.53544L8.24264 12.1923L6.12132 10.071C5.73079 9.68045 5.09763 9.68045 4.70711 10.071Z'
              fill='#2C3249'
            />
          </>
        )
      default:
        return (
          <rect
            x='1'
            y='1'
            width='18'
            height='18'
            rx='3'
            fill='white'
            stroke='#847970'
            strokeWidth='2'
          />
        )
    }
  }

  return (
    <ThemeWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 2,
          height: '40px',
          cursor: 'pointer',
          color: variant === 'dark' ? theme.colors.darkGray : 'white'
        }}
        onClick={handleChange}
      >
        <Input
          type='checkbox'
          defaultChecked={state === 'checked'}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        />
        <Image
          variant={variant}
          hasFocus={hasFocus}
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          {getSVG()}
        </Image>
        {label && (
          <Text ml={2} variant='checkboxLabel'>
            {label}
          </Text>
        )}
      </Box>
    </ThemeWrapper>
  )
}

Checkbox.propTypes = {
  /** A variant for the button */
  variant: PropTypes.oneOf(['dark', 'light']),
  /** An string describing the state of the checkbox */
  state: PropTypes.oneOf(['error', 'checked', 'default']),
  /** An string to display as the checkbox label */
  label: PropTypes.string,
  /** A callback to fire when the input field changes */
  handleChange: PropTypes.func
}

Checkbox.defaultProps = {
  state: 'default',
  label: ''
}

export default Checkbox
