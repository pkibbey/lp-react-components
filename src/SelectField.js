import React from 'react'
import { Box } from 'rebass'
import { Select, Label } from '@rebass/forms'
import ErrorText from './ErrorText'

const SelectField = ({
  name,
  value,
  defaultValue,
  updateUserDetail,
  error,
  updateError,
  countries
}) => {
  const getVariant = () => {
    if (error.isError && value === '') {
      return 'textInputErrorDisabled'
    }
    if (error.isError) {
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
          gridTemplateColumns: ['auto', '5fr 4fr']
        }}
      >
        <Label htmlFor={`select-field-${name}`} style={{ display: 'none' }}>
          {name}
        </Label>
        <Select
          data-testid={`select-field-${name}`}
          autoComplete='off'
          variant={getVariant()}
          defaultValue={defaultValue}
          onChange={(event) =>
            updateUserDetail && updateUserDetail(name, event.target.value)
          }
          onBlur={() =>
            updateError && updateError(name, { hasInteracted: true })
          }
          name='region'
          mb={error.isError ? 2 : 4}
          sx={{
            '&:focus, &:hover': {
              outlineColor: 'navyGray',
              outlineWidth: 2,
              outlineStyle: 'auto'
            }
          }}
        >
          {countries.map((option) => (
            <option
              key={option.name}
              value={option.value || 'z1'}
              disabled={option.disabled}
            >
              {option.name}
            </option>
          ))}
        </Select>
      </Box>
      {error && <ErrorText name={name} error={error} />}
    </Box>
  )
}

export default SelectField
