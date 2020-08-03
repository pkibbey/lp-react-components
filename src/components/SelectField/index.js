import React from 'react'
import { Box } from 'rebass'
import { Select, Label } from '@rebass/forms'
import ErrorText from '../ErrorText'
import PropTypes from 'prop-types'
import ThemeWrapper from '../ThemeWrapper'

/**
 * Used for selecting a single option from a defined set
 *
 * @visibleName Select Field
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
  const isErrored = error && error.isError

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
    <ThemeWrapper>
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
            onBlur={() =>
              handleBlur && handleBlur(name, { hasInteracted: true })
            }
            name='region'
            mb={isErrored ? 2 : 4}
            py={0}
            px={3}
            variant={getVariant()}
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
    </ThemeWrapper>
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
