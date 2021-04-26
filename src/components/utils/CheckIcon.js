import React from 'react'
import theme from '../../theme'

function CheckIcon({ isAltVariant }) {
  return (
    <svg
      width='17'
      height='17'
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.51174 12.7906L4.51156 12.7907L5.92578 14.205L15.1182 5.01257L13.7039 3.59836L5.92595 11.3764L3.09718 8.54759L1.68296 9.9618L4.51174 12.7906Z'
        fill={isAltVariant ? 'white' : theme.colors.navyGray}
      />
    </svg>
  )
}

export default CheckIcon
