import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../components/Loader';

test('renders a loader', () => {
  render(<Loader />);
});
