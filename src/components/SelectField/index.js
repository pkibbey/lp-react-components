import React from 'react'
import { Box } from 'rebass'
import ErrorText from '../ErrorText'
import PropTypes from 'prop-types'
import ThemeWrapper from '../ThemeWrapper'
import Select from 'react-select'
import theme from '../../theme'

/**
 * Used for selecting a single option from a defined set
 *
 * @visibleName Select Field
 */
const SelectField = ({
  name,
  defaultValue,
  isFullWidth,
  handleChange,
  error,
  handleBlur,
  options,
  placeholder
}) => {
  const isErrored = error && error.isError

  const getStyle = () => {
    const basicStyle = {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      position: 'relative',
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      fontFamily: '"Roboto", sans-serif',
      fontSize: theme.fontSizes[1],
      height: '40px',
      letterSpacing: '0.01em',
      lineHeight: '38px',
      WebkitFontSmoothing: 'antialiased',
      outlineStyle: 'auto',
      outlineColor: 'navyGray',
      '&:hover': {
        outlineWidth: 2
      },
      '::-ms-expand': {
        display: 'none'
      },
      color: 'navyGray',
      gridArea: 'input',
      msGridColumn: '1',
      '&::placeholder': {
        color: 'darkGray'
      }
    }

    if (isErrored) {
      return {
        control: (provided, state) => ({
          ...basicStyle,
          outlineWidth: state.isFocused ? 2 : 0,
          borderColor: 'red',
          backgroundColor: 'lightRed',
          // HACK: colorize webkit autocomplete input fields
          WebkitBoxShadow: `inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px #FEECEC`
        }),
        valueContainer: (provided) => ({
          ...provided,
          height: '100%',
          padding: '0 16px'
        }),
        input: (provided) => ({
          ...provided,
          margin: 0,
          paddingBottom: 0,
          paddingTop: 0
        })
      }
    }
    return {
      control: (provided, state) => ({
        ...basicStyle,
        outlineWidth: state.isFocused ? 2 : 0,
        borderColor: 'gray',
        // HACK: colorize webkit autocomplete input fields
        boxShadow:
          'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white'
      }),
      valueContainer: (provided) => ({
        ...provided,
        height: '100%',
        padding: '0 16px'
      }),
      input: (provided) => ({
        ...provided,
        margin: 0,
        padding: 0
      })
    }
  }

  return (
    <ThemeWrapper>
      <Box>
        <Box
          sx={{
            position: 'relative',
            display: isFullWidth ? 'block' : ['block', 'grid'],
            gridTemplateColumns: ['auto', '5fr 4fr'],
            gridTemplateAreas: "'input spacer'",
            '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
              display: isFullWidth ? 'block' : '-ms-grid',
              msGridColumns: '5fr 4fr'
            }
          }}
          mb={isErrored ? 2 : 4}
        >
          <Select
            name={`select-field-${name}`}
            isSearchable
            options={options}
            defaultValue={defaultValue}
            onInputChange={(inputValue) => {
              handleChange && handleChange(name, inputValue)
              handleBlur && handleBlur(name, { hasInteracted: true })
            }}
            styles={getStyle()}
            placeholder={placeholder}
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
          <Box sx={{ gridArea: 'spacer', msGridColumn: '2' }} />
        </Box>
        <ErrorText error={error} mb={3} />
      </Box>
    </ThemeWrapper>
  )
}

SelectField.propTypes = {
  /** The  placeholder for the select field */
  placeholder: PropTypes.string,
  /** The value for the select field */
  defaultValue: PropTypes.string.isRequired,
  /** An array of options for the select field  */
  options: PropTypes.array,
  /** Select field label for accessibility */
  name: PropTypes.string,
  /** A callback to fire when the select field changes */
  handleChange: PropTypes.func,
  /** A callback to fire when the select field loses focus */
  handleBlur: PropTypes.func,
  /** When this is true, the select field will render full width */
  isFullWidth: PropTypes.bool,
  /** An object describing the error in the select field */
  error: PropTypes.shape({
    isError: PropTypes.bool,
    hasInteracted: PropTypes.bool,
    message: PropTypes.string
  })
}

SelectField.defaultProps = {
  placeholder: '',
  name: 'select-field',
  options: [],
  error: {},
  isFullWidth: false
}

export default SelectField
