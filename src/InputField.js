import React, { useEffect, useState, useRef } from 'react'
import { Flex, Box } from 'rebass'
import { Input, Label } from '@rebass/forms'
import ErrorText from './ErrorText'
import ErrorRequirements from './ErrorRequirements'
import { ReactComponent as PasswordShow } from './assets/password-show.svg'
import { ReactComponent as PasswordHide } from './assets/password-hide.svg'

const InputField = ({
  name,
  placeholder,
  value,
  updateUserDetail,
  updateError,
  error,
  isFirst,
  isMultiple
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const inputRef = useRef()

  const isPassword = name === 'password'

  const getAutoCompleteType = () => {
    switch (name) {
      case 'password':
        return 'new-password'
      case 'email':
        return 'email'
      case 'firstName':
        return 'given-name'
      case 'lastName':
        return 'family-name'
      default:
        return 'off'
    }
  }

  useEffect(() => {
    // Focus the first input field onload
    if (isFirst) {
      inputRef.current.focus()
    }
  }, [isFirst])

  const PasswordIcon = () => (
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
        color: 'gray',
        zIndex: 1
      }}
    >
      {isPasswordVisible ? <PasswordShow /> : <PasswordHide />}
    </Flex>
  )

  return (
    <Box>
      <Box
        sx={{
          display: isMultiple ? 'block' : 'grid',
          gridTemplateColumns: ['auto', '5fr 4fr']
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Label htmlFor={`input-field-${name}`} style={{ display: 'none' }}>
            {name}
          </Label>
          {isPassword && <PasswordIcon />}
          <Input
            autoComplete={getAutoCompleteType()}
            data-testid={`input-field-${name}`}
            id={`input-field-${name}`}
            ref={inputRef}
            variant={error.isError ? 'textInputError' : 'textInput'}
            type={isPassword && !isPasswordVisible ? 'password' : 'text'}
            placeholder={placeholder}
            mb={error.isError ? 2 : 4}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false)
              updateError && updateError(name, { hasInteracted: true })
            }}
            pr={isPassword && !isPasswordVisible ? 6 : 3}
            onChange={(event) =>
              updateUserDetail && updateUserDetail(name, event.target.value)
            }
            sx={{
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
      {error && <ErrorText name={name} error={error} />}
    </Box>
  )
}

export default InputField
