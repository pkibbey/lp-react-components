import React from 'react';
import { Box } from 'rebass';
import { keyframes } from '@emotion/core';

const bounce = keyframes`
  from, 10%, 27%, 40%, to {
    transform: translate3d(0,0,0);
  }
  20%, 22% {
    transform: translate3d(0, -8px, 0);
  }
  35% {
    transform: translate3d(0, -4px, 0);
  }
  45% {
    transform: translate3d(0,-1px,0);
  }
`;

const LoadingDot = ({ delay }) => (
  <Box
    as="span"
    sx={{
      backgroundColor: 'white',
      width: '3px',
      height: '3px',
      borderRadius: '50%',
      animationName: bounce,
      animationDuration: '1.5s',
      animationTimingFunction: 'linear',
      animationIterationCount: '3',
      animationDelay: `${delay}s`,
    }}
  />
);

const LoadingDots = () => (
  <Box
    as="span"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      width: '16px',
      height: '24px',
      marginLeft: '4px',
    }}
  >
    <LoadingDot delay={0} />
    <LoadingDot delay={0.15} />
    <LoadingDot delay={0.3} />
  </Box>
);

export default LoadingDots;
