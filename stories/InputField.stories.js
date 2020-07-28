import React from 'react';
import { action } from '@storybook/addon-actions';
import InputField from '../InputField';

export default {
  title: 'InputField',
  component: InputField,
};

export const Default = () => (
  <InputField
    isFirst
    isMultiple={false}
    name="default"
    placeholder="placeholder"
    value=""
    defaultValue="test"
    updateUserDetail={action('updateUserDetail')}
    error={{}}
    updateError={action('updateError')}
  />
);

export const Errored = () => (
  <InputField
    isFirst
    isMultiple={false}
    name="default"
    placeholder="placeholder"
    value=""
    defaultValue="test"
    updateUserDetail={action('updateUserDetail')}
    error={{ isError: true, hasInteracted: true, message: 'An error has occurred' }}
    updateError={action('updateError')}
  />
);

export const Password = () => (
  <InputField
    isFirst
    isMultiple={false}
    name="password"
    placeholder="placeholder"
    value=""
    defaultValue="test"
    updateUserDetail={action('updateUserDetail')}
    error={{}}
    updateError={action('updateError')}
  />
);

export const Email = () => (
  <InputField
    isFirst
    isMultiple={false}
    name="email"
    placeholder="placeholder"
    value=""
    defaultValue="test"
    updateUserDetail={action('updateUserDetail')}
    error={{}}
    updateError={action('updateError')}
  />
);

export const Muiltiple = () => (
  <div style={{ display: 'grid', gridGap: 16, gridTemplateColumns: 'auto auto' }}>
    <InputField
      isFirst
      isMultiple
      name="default"
      placeholder="placeholder"
      value=""
      defaultValue="test"
      updateUserDetail={action('updateUserDetail')}
      error={{}}
      updateError={action('updateError')}
    />
    <InputField
      isFirst={false}
      isMultiple
      name="default"
      placeholder="placeholder"
      value="Hello"
      defaultValue="test"
      updateUserDetail={action('updateUserDetail')}
      error={{}}
      updateError={action('updateError')}
    />
  </div>
);
