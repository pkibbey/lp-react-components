import React from 'react';
import { action } from '@storybook/addon-actions';
import SelectField from '../SelectField';

export default {
  title: 'SelectField',
  component: SelectField,
};

export const Default = () => (
  <SelectField
    name="default"
    value=""
    defaultValue="test"
    updateUserDetail={action('updateUserDetail')}
    error="errorMessage"
    updateError={action('updateError')}
    countries={[{ name: 'Sample', value: 'sample' }, { name: 'Test', value: 'test' }]}
  />
);
