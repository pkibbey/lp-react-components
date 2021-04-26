import React from 'react'
import { Text } from 'theme-ui'
import PropTypes from 'prop-types'

const ErrorRequirementsItems = ({ items }) =>
  Object.keys(items).map((item) => {
    switch (item) {
      case 'data':
        return items.data.map((d) => (
          <Text
            key={d.name}
            variant={d.isError ? 'errorText' : 'errorInformation'}
            ml={d.shouldIndent ? 2 : 0}
            sx={{ display: 'block' }}
          >
            {`${d.name}`}
          </Text>
        ))
      default:
        return (
          <Text
            key={items.name}
            variant='errorInformation'
            sx={{ display: 'block' }}
          >
            {items.name}
          </Text>
        )
    }
  })

const ErrorRequirements = ({ focused, error }) => {
  if ((error.isError === true || focused) && error.requirements) {
    return (
      <Text
        ml={6}
        mr={6}
        variant='errorInformation'
        sx={{
          gridArea: 'requirements',
          msGridColumn: '2',
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
    requirements: PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          isError: PropTypes.bool,
          shouldIndent: PropTypes.bool
        })
      )
    })
  })
}

ErrorRequirements.defaultProps = {
  focused: false,
  error: {}
}

export default ErrorRequirements
