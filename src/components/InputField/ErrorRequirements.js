import React from 'react'
import { Text } from 'rebass'
import theme from '../../theme'
import PropTypes from 'prop-types'

const getStyles = (variant) => {
  switch (variant) {
    case 'errorText':
      return {
        fontSize: theme.fontSizes[0],
        fontFamily: '"Roboto", sans-serif',
        lineHeight: '20px',
        color: theme.colors.red,
        WebkitFontSmoothing: 'antialiased'
      }
    default:
      return {
        fontSize: theme.fontSizes[0],
        fontFamily: '"Roboto", sans-serif',
        lineHeight: '20px',
        color: theme.colors.navyGray,
        WebkitFontSmoothing: 'antialiased'
      }
  }
}

const ErrorRequirementsItems = ({ items }) =>
  Object.keys(items).map((item) => {
    switch (item) {
      case 'data':
        return items.data.map((d) => (
          <Text
            key={d.name}
            sx={getStyles(d.isError ? 'errorText' : 'errorInformation')}
            ml={d.shouldIndent ? 2 : 0}
          >
            {`${d.name}`}
          </Text>
        ))
      case 'name':
        return (
          <Text
            key={items.name}
            sx={getStyles('errorInformation')}
          >{`${items.name}:`}</Text>
        )
      default:
        return null
    }
  })

const ErrorRequirements = ({ focused, error }) => {
  if ((error.isError === true || focused) && error.requirements) {
    return (
      <Text
        data-testid='error-requirements'
        ml={6}
        mr={6}
        sx={{
          ...getStyles('errorInformation'),
          overflow: 'visible',
          height: 0,
          display: ['none', 'block']
        }}
      >
        <ErrorRequirementsItems items={error.requirements} />
      </Text>
    )
  }
  return null
}

ErrorRequirements.propTypes = {
  /** When this is true, the input has focus */
  focused: PropTypes.bool,
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

ErrorRequirements.defaultProps = {
  focused: false,
  error: {}
}

export default ErrorRequirements
