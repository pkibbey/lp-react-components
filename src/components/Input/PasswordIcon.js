import React from 'react'

function PasswordIcon({ variant }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d={
          variant === 'hide'
            ? 'M16 8c0 3.314-3.582 6-8 6s-8-2.686-8-6 3.582-6 8-6 8 2.686 8 6zm-2 0c0 2.21-2.686 4-6 4s-6-1.79-6-4 2.686-4 6-4 6 1.79 6 4zm-6 2a2 2 0 100-4 2 2 0 000 4z'
            : 'M8 14c4.418 0 8-2.686 8-6s-3.582-6-8-6-8 2.686-8 6 3.582 6 8 6zm0-4a2 2 0 100-4 2 2 0 000 4z'
        }
        clipRule='evenodd'
      />
    </svg>
  )
}

export default PasswordIcon
