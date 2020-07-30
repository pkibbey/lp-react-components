import React, { useEffect, useState, useRef } from 'react'
import { Flex, Box } from 'rebass'
import { Input, Label } from '@rebass/forms'
import ErrorText from './ErrorText'
import ErrorRequirements from './ErrorRequirements'
import PasswordIcon from './assets/PasswordIcon'
import theme from './assets/theme'

const getStyles = (variant) => {
  switch (variant) {
    case 'textInputError':
      return {
        fontSize: 1,
        fontFamily: '"Roboto", sans-serif',
        color: theme.colors.navyGray,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.red,
        backgroundColor: theme.colors.lightRed,
        borderRadius: 8,
        lineHeight: '40px',
        paddingLeft: theme.space[3],
        paddingRight: theme.space[3],
        paddingTop: 0,
        paddingBottom: 0,
        letterSpacing: '0.01em',
        WebkitFontSmoothing: 'antialiased',
        // HACK: colorize webkit autocomplete input fields
        boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${theme.colors.lightRed}`,
        '&::placeholder': {
          color: theme.colors.darkGray
        }
      }
    default:
      return {
        fontSize: 1,
        fontFamily: '"Roboto", sans-serif',
        color: theme.colors.navyGray,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.gray,
        borderRadius: 8,
        lineHeight: '40px',
        paddingLeft: theme.space[3],
        paddingRight: theme.space[3],
        paddingTop: 0,
        paddingBottom: 0,
        letterSpacing: '0.01em',
        WebkitFontSmoothing: 'antialiased',
        // HACK: colorize webkit autocomplete input fields
        boxShadow:
          'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white',
        '&::placeholder': {
          color: theme.colors.darkGray
        }
      }
  }
}

const InputField = ({
  name,
  type,
  placeholder,
  value,
  handleChange,
  handleBlur,
  error,
  shouldFocusOnLoad,
  isFullWidth
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const inputRef = useRef()

  const isPassword = type === 'password'

  const getAutoCompleteType = () => {
    // NOTE: Disabling autoComplete by using a randomized name since it interferes with hotJar forms
    return Math.random().toString(36).substring(2, 15)
  }

  useEffect(() => {
    // Focus the first input field onload
    if (shouldFocusOnLoad) {
      inputRef.current.focus()
    }
  }, [shouldFocusOnLoad])

  const VisibilityIcon = () => (
    <Flex
      data-testid='password-icon'
      title='toggle password visibility'
      alignItems='center'
      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      sx={{
        padding: '13px',
        position: 'absolute',
        right: 0,
        top: 0,
        cursor: 'pointer',
        color: theme.colors.gray,
        zIndex: 1
      }}
    >
      <PasswordIcon variant={isPasswordVisible ? 'show' : 'hide'} />
    </Flex>
  )

  return (
    <Box>
      <Box
        sx={{
          display: isFullWidth ? 'block' : 'grid',
          gridTemplateColumns: ['auto', '5fr 4fr']
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Label
            htmlFor={`input-field-${name}`}
            style={{
              // label required for a11y - hide in the UI
              opacity: 0,
              height: 0,
              width: 0,
              pointerEvents: 'none'
            }}
          >
            {name}
          </Label>
          {isPassword && <VisibilityIcon />}
          <Input
            autoComplete={getAutoCompleteType()}
            data-testid={`input-field-${name}`}
            id={`input-field-${name}`}
            ref={inputRef}
            type={isPassword && !isPasswordVisible ? 'password' : 'text'}
            placeholder={placeholder}
            mb={error.isError ? 2 : 4}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false)
              handleBlur && handleBlur(name, { hasInteracted: true })
            }}
            pr={isPassword && !isPasswordVisible ? 6 : 3}
            onChange={(event) =>
              handleChange && handleChange(name, event.target.value)
            }
            sx={{
              ...getStyles(error.isError ? 'textInputError' : 'textInput'),
              '&:focus, &:hover': {
                outlineColor: 'navyGray',
                outlineWidth: 2,
                outlineStyle: 'auto'
              }
            }}
          />
        </Box>
        <ErrorRequirements focused={isFocused} error={error} />
      </Box>
      {error && <ErrorText error={error} />}
    </Box>
  )
}

export default InputField
