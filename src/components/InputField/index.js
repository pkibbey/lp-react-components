import React, { useEffect, useState, useRef } from 'react'
import { Flex, Box } from 'rebass'
import { Input, Label } from '@rebass/forms'
import ErrorText from '../ErrorText'
import ErrorRequirements from './ErrorRequirements'
import PasswordIcon from './PasswordIcon'
import theme from '../../theme'
import PropTypes from 'prop-types'

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

/**
 * Used to gather input from the user. The field type can be set via the *type* prop.
 *
 * @visibleName Input Field
 */
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
  const isErrored = error && error.isError

  const getAutoCompleteType = () => {
    // NOTE: This disables the input autoComplete by using a randomized name
    // This was done to resolve an issue with hotJar forms
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
            mb={isErrored ? 2 : 4}
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
              ...getStyles(isErrored ? 'textInputError' : 'textInput'),
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
      {isErrored && <ErrorText error={error} mb={3} />}
    </Box>
  )
}

InputField.propTypes = {
  /** The type of input field */
  type: PropTypes.oneOf(['text', 'email', 'password']),
  /** The value for the input field */
  value: PropTypes.string,
  /** The default value for the input field */
  defaultValue: PropTypes.string,
  /** The placeholder for the input field */
  placeholder: PropTypes.string,
  /** Input field label for accessibility */
  name: PropTypes.string,
  /** A callback to fire when the input field changes */
  handleChange: PropTypes.func,
  /** A callback to fire when the input field loses focus */
  handleBlur: PropTypes.func,
  /** When this is true, the input will focus on component load */
  shouldFocusOnLoad: PropTypes.bool,
  /** When this is true, the input will render full width and ignore any requirement errors */
  isFullWidth: PropTypes.bool,
  /** An object describing the error */
  error: PropTypes.shape({
    isError: PropTypes.bool,
    hasInteracted: PropTypes.bool,
    message: PropTypes.string,
    requirements: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string,
        data: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            isError: PropTypes.bool,
            shouldIndent: PropTypes.bool
          })
        )
      })
    ])
  })
}

InputField.defaultProps = {
  name: 'input',
  defaultValue: ''
}

export default InputField
