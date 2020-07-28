import React from 'react';
import { Text } from 'rebass';

const ErrorText = ({ name, error }) => (error.isError && error.hasInteracted
  ? (
    <Text
      variant="errorMessage"
      mb={3}
      mt={name === 'recaptcha' ? 2 : 0}
    >
      {error.message}
    </Text>
  )
  : null);
export default ErrorText;
