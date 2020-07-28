import React from 'react';
import { Image } from 'rebass';
import Spinner from './assets/oval.svg';

const Loader = () => (
  <Image alt="" data-testid="loader" src={Spinner} height={24} width={24} />
);

export default Loader;
