import React, { useEffect, useState, useRef } from 'react'
import { Box, Textarea } from 'theme-ui'
import ErrorText from '../ErrorText'
import PropTypes from 'prop-types'

/**
 * Used to gather input from the user. The field type can be set via the *type* prop.
 *
 * @visibleName Text Field
 */
const TextField = ({
  name,
  placeholder,
  value,
  handleChange,
  handleBlur,
  error,
  shouldFocusOnLoad,
  isFullWidth,
  rows,
  disabled
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef()

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

  const getVariant = () => {
    if (disabled) {
      return 'textFieldDisabled'
    }
    return isErrored ? 'textFieldError' : 'textField'
  }

  const hasRequirements =
    (error?.isError === true || isFocused) && error?.requirements

  return (
    <Box>
      <Box
        sx={{
          display: isFullWidth ? 'block' : ['block', 'grid'],
          gridTemplateColumns: ['auto', '5fr 4fr'],
          gridTemplateAreas: `'input'`,
          '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
            display: isFullWidth ? 'block' : '-ms-grid',
            msGridColumns: '5fr 4fr'
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            gridArea: 'input',
            msGridColumn: '1'
          }}
        >
          <Textarea
            rows={rows}
            autoComplete={getAutoCompleteType()}
            id={`input-field-${name}`}
            ref={inputRef}
            placeholder={placeholder}
            mb={isErrored ? 2 : 0}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false)
              handleBlur && handleBlur(name, { hasInteracted: true })
            }}
            px={3}
            py={2}
            onChange={(event) =>
              handleChange && handleChange(name, event.target.value)
            }
            variant={getVariant()}
            disabled={disabled}
          />
        </Box>
      </Box>
      {isErrored && <ErrorText error={error} mb={3} />}
    </Box>
  )
}

TextField.propTypes = {
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
  /** When this is true, the input will render full width and ignore any requirement errors */
  isFullWidth: PropTypes.bool,
  /** When this is true, the input will render in a disabled state and be unresponsive to user input */
  disabled: PropTypes.bool,
  /** The number of rows to display in the textarea */
  rows: PropTypes.number,
  /** An object describing the error */
  error: PropTypes.shape({
    isError: PropTypes.bool,
    hasInteracted: PropTypes.bool,
    message: PropTypes.string
  })
}

TextField.defaultProps = {
  name: 'text-field',
  rows: 2
}

export default TextField
