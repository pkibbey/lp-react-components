import React from 'react'
import { Box } from 'rebass'
import { Select, Label } from '@rebass/forms'
import ErrorText from '../ErrorText'
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
        WebkitBoxShadow: `inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${theme.colors.lightRed}`,
        '&::placeholder': {
          color: theme.colors.darkGray
        }
      }
    case 'textInputErrorDisabled':
      return {
        fontSize: 1,
        fontFamily: '"Roboto", sans-serif',
        color: theme.colors.darkGray,
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
        WebkitBoxShadow: `inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${theme.colors.lightRed}`,
        '&::placeholder': {
          color: theme.colors.darkGray
        }
      }
    case 'textInputDisabled':
      return {
        fontSize: 1,
        fontFamily: '"Roboto", sans-serif',
        color: theme.colors.darkGray,
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
 * Used for selecting a single option from a defined set
 */
const SelectField = ({
  name,
  value,
  defaultValue,
  handleChange,
  error,
  handleBlur,
  options
}) => {
  const isErrored = error.isError

  const getVariant = () => {
    if (isErrored && value === '') {
      return 'textInputErrorDisabled'
    }
    if (isErrored) {
      return 'textInputError'
    }
    if (value === '') {
      return 'textInputDisabled'
    }
    return 'textInput'
  }

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: ['auto', '0 5fr 4fr']
        }}
      >
        <Label
          htmlFor={`select-field-${name}`}
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
        <Select
          data-testid={`select-field-${name}`}
          autoComplete='off'
          defaultValue={defaultValue}
          onChange={(event) =>
            handleChange && handleChange(name, event.target.value)
          }
          onBlur={() => handleBlur && handleBlur(name, { hasInteracted: true })}
          name='region'
          mb={isErrored ? 2 : 4}
          sx={{
            ...getStyles(getVariant()),
            '&:focus, &:hover': {
              outlineColor: 'navyGray',
              outlineWidth: 2,
              outlineStyle: 'auto'
            }
          }}
        >
          {options.map((option) => (
            <option
              key={option.name}
              value={option.value}
              disabled={option.disabled}
            >
              {option.name}
            </option>
          ))}
        </Select>
      </Box>
      <ErrorText error={error} mb={3} />
    </Box>
  )
}

SelectField.propTypes = {
  /** The value for the select field */
  value: PropTypes.string.isRequired,
  /** An array of options for the select field  */
  options: PropTypes.array,
  /** Select field label for accessibility */
  name: PropTypes.string,
  /** A callback to fire when the select field changes */
  handleChange: PropTypes.func,
  /** A callback to fire when the select field loses focus */
  handleBlur: PropTypes.func,
  /** A defaultValue for the select field */
  defaultValue: PropTypes.string,
  /** An object describing the error in the select field */
  error: PropTypes.shape({
    isError: PropTypes.bool,
    hasInteracted: PropTypes.bool,
    message: PropTypes.string
  })
}

SelectField.defaultProps = {
  name: 'select-field',
  defaultValue: '',
  options: [],
  error: {}
}

export default SelectField
