import React, { useState, useRef, useEffect } from 'react'
import { Box, Flex } from 'theme-ui'
import Select, { components } from 'react-select'
import CreatableSelect from 'react-select/creatable'
import theme from '../../theme'
import DropdownIndicator from '../utils/DropdownIndicator'
import Option from '../utils/Option'
import Input from '../utils/Input'

const ValueContainer = (props) => {
  const value =
    props.selectProps?.value?.label || props.selectProps?.placeholder || ''
  const placeholderColor = props.selectProps.isAltVariant
    ? theme.colors.lightGray
    : theme.colors.darkGray
  const textColor = props.selectProps.isAltVariant
    ? theme.colors.lightGray
    : theme.colors.darkGray

  return (
    <Box
      data-testid='value-container'
      pl={1}
      style={{
        color: props.selectProps?.value ? textColor : placeholderColor,
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}
    >
      {value}
    </Box>
  )
}

/**
 * Used for selecting a single option from a defined set, but with a compact display
 *
 * @visibleName Compact Select Field
 */
const CompactSelectField = ({
  name,
  placeholder,
  value,
  defaultValue,
  isFullWidth,
  handleChange,
  handleBlur,
  options,
  height,
  autoFocus,
  optionsAbove,
  allowCreateOptions,
  handleCreateOption,
  forceFocus,
  type,
  alignRight,
  justifyRight,
  variant
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const node = useRef()
  const isAltVariant = variant === 'alt'

  const detectOutsideClick = (e) => {
    if (!node.current.contains(e.target)) {
      setMenuIsOpen(false)
    }
  }

  // Detect outside clicks
  useEffect(() => {
    document.addEventListener('mousedown', detectOutsideClick)
    return () => {
      document.removeEventListener('mousedown', detectOutsideClick)
    }
  }, [])

  const getStyles = () => {
    const basicStyle = {
      marginLeft: 13,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      borderWidth: 0,
      fontFamily: '"Roboto", sans-serif',
      fontSize: theme.fontSizes[0],
      height: theme.rowHeight,
      letterSpacing: '0.01em',
      lineHeight: '38px',
      WebkitFontSmoothing: 'antialiased',
      '::-ms-expand': {
        display: 'none'
      },
      color: isAltVariant ? 'white' : theme.colors.navyGray,
      gridArea: 'input'
    }

    const baseStyles = {
      valueContainer: (provided, state) => {
        return {
          ...provided,
          height: '100%',
          padding: 0,
          flex: 'none'
        }
      },
      input: (provided) => ({
        ...provided,
        width: isFullWidth ? '100%' : 'auto',
        margin: 0,
        paddingBottom: 0,
        paddingTop: 0
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        color: isAltVariant ? theme.colors.lightGray : theme.colors.navy,
        '&:hover': {
          color: isAltVariant ? 'white' : theme.colors.darkNavy
        }
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none'
      }),
      menu: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',
        margin: 0,
        padding: 0,
        borderRadius: theme.space[2],
        overflow: 'hidden',
        bottom: state.selectProps.optionsAbove ? '100%' : provided.bottom,
        top: state.selectProps.optionsAbove ? 'auto' : provided.top,
        width: 200,
        right: state.selectProps.alignRight ? 0 : provided.right
      }),
      menuList: (provided) => ({
        ...provided,
        margin: 0,
        padding: 0,
        borderRadius: theme.space[2],
        overflow: 'hidden',
        boxShadow: isAltVariant
          ? 'none'
          : '0px 0px 16px rgba(132, 121, 112, 0.64)',
        maxHeight: height && `${height}px`,
        overflow: 'auto',
        border: isAltVariant ? '1px solid #484B68' : 'none'
      }),
      option: (provided, state) => {
        const getOptionColor = () => {
          if (isAltVariant) {
            return state.isSelected ? 'white' : theme.colors.midGrey
          }
          return state.isSelected ? theme.colors.navy : theme.colors.darkGray
        }

        return {
          ...provided,
          fontFamily: '"Roboto", sans-serif',
          fontSize: theme.fontSizes[1],
          paddingTop: (theme.rowHeight - 22) / 2,
          paddingBottom: (theme.rowHeight - 22) / 2,
          lineHeight: '22px',
          margin: 0,
          padding: '0 16px',
          color: getOptionColor(),
          backgroundColor: isAltVariant ? theme.colors.navy : 'white',
          textAlign: state.selectProps.justifyRight
            ? 'right'
            : provided.textAlign,
          '&:hover': {
            backgroundColor: isAltVariant ? '#313055' : theme.colors.lighterGray
          }
        }
      },
      placeholder: (provided, state) => ({
        ...provided,
        fontFamily: '"Roboto", sans-serif',
        fontSize: theme.fontSizes[1],
        color: isAltVariant ? theme.colors.lightGray : theme.colors.darkGray,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        position: 'auto',
        transform: 'auto'
      })
    }

    return {
      ...baseStyles,
      control: (provided, state) => ({
        ...basicStyle,
        outlineWidth: state.isFocused || forceFocus ? 2 : 0,
        borderColor: 'gray',
        // HACK: colorize webkit autocomplete input fields
        boxShadow: isAltVariant
          ? 'none'
          : 'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white'
      })
    }
  }

  const SelectComponent = allowCreateOptions ? CreatableSelect : Select

  return (
    <Box>
      <Box
        sx={{ cursor: 'pointer' }}
        onClick={() => setMenuIsOpen((s) => !s)}
        ref={node}
      >
        <SelectComponent
          name={`select-field-${name}`}
          isSearchable={false}
          options={options}
          value={value}
          defaultValue={defaultValue}
          styles={getStyles()}
          onChange={(value) => {
            handleChange && handleChange(name, value.value)
            handleBlur && handleBlur(name, { hasInteracted: true })
          }}
          placeholder={placeholder}
          autoFocus={autoFocus}
          optionsAbove={optionsAbove}
          onCreateOption={handleCreateOption}
          components={{ Input, ValueContainer, DropdownIndicator, Option }}
          type={type}
          menuIsOpen={menuIsOpen}
          alignRight={alignRight}
          justifyRight={justifyRight}
          isAltVariant={isAltVariant}
        />
      </Box>
    </Box>
  )
}

CompactSelectField.defaultProps = {
  name: 'select-field',
  value: undefined,
  defaultValue: undefined,
  maxOptions: 5,
  options: [],
  isFullWidth: false,
  isSearchable: true,
  allowCreateOptions: false,
  forceFocus: false,
  alignRight: false,
  justifyRight: false
}

export default CompactSelectField
