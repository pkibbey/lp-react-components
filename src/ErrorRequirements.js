import React from 'react';
import { Text } from 'rebass';

const ErrorRequirementsItem = ({ items }) => Object.keys(items).map((item) => {
  switch (item) {
    case 'data':
      return (
        items.data.map((d) => (
          <Text
            key={d.name}
            variant={d.isError ? 'errorText' : 'errorInformation'}
            ml={d.shouldIndent ? 2 : 0}
          >
            {`${d.name}`}
          </Text>
        ))
      );
    case 'name':
      return (
        <Text key={items.name} variant="errorInformation">{`${items.name}:`}</Text>
      );
    default:
      return null;
  }
});

const ErrorRequirements = ({ focused, error }) => {
  if ((error.isError === true || focused) && error.requirements) {
    return (
      <Text
        data-testid="error-requirements"
        ml={6}
        mr={6}
        variant="errorInformation"
        sx={{
          overflow: 'visible',
          height: 0,
          display: ['none', 'block'],
        }}
      >
        <ErrorRequirementsItem items={error.requirements} />
      </Text>
    );
  }
  return null;
};

export default ErrorRequirements;
