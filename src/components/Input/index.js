import React, { useState, useRef, useLayoutEffect } from 'react'
import { Flex, Box, Input } from 'theme-ui'
import PasswordIcon from './PasswordIcon'
import PropTypes from 'prop-types'
import theme from '../../theme'

/**
 * Used to gather input from the user. The field type can be set via the *type* prop.
 *
 * @visibleName Input Field
 */
// TODO: create a single Input component that can be used
const InputComponent = ({
  name,
  type,
  placeholder,
  value,
  autoComplete,
  handleChange,
  handleBlur,
  handleFocus,
  error,
  shouldFocusOnLoad,
  disabled,
  sx,
  isErrored,
  ...otherProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const inputRef = useRef()

  const isPassword = type === 'password'

  useLayoutEffect(() => {
    // Focus the first input field onload
    if (shouldFocusOnLoad && inputRef.current) {
      inputRef.current.focus()
    }
  }, [shouldFocusOnLoad, inputRef.current])

  const VisibilityIcon = () => (
    <Flex
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

  const getVariant = () => {
    if (disabled) {
      return 'textInputDisabled'
    }
    return isErrored ? 'textInputError' : 'textInput'
  }

  return (
    <Box sx={sx}>
      {isPassword && <VisibilityIcon />}
      <Input
        autoComplete={autoComplete}
        id={`input-field-${name}`}
        name={`input-field-${name}`}
        ref={inputRef}
        type={isPassword && !isPasswordVisible ? 'password' : 'text'}
        placeholder={placeholder}
        value={value}
        onBlur={() => {
          // TODO: maybe I should move the hasInteractedOut into a different place,
          // or just send this back as a single object?
          handleBlur && handleBlur(name, { hasInteracted: true })
        }}
        onFocus={() => {
          handleFocus && handleFocus(name, { hasInteracted: true })
        }}
        pl={3}
        pr={isPassword && !isPasswordVisible ? 6 : 3}
        onChange={(event) =>
          handleChange && handleChange(name, event.target.value)
        }
        variant={getVariant()}
        disabled={disabled}
        {...otherProps}
      />
    </Box>
  )
}

Input.propTypes = {
  /** The type of input field */
  type: PropTypes.oneOf(['text', 'email', 'password']),
  /** The value for the input field */
  value: PropTypes.string,
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
  /** When this is true, the input will render in a disabled state and be unresponsive to user input */
  disabled: PropTypes.bool,
  /** When this is true, the input will render in an error state */
  isErrored: PropTypes.bool
}

Input.defaultProps = {
  name: 'input'
}

export default InputComponent
