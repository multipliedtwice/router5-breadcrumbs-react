import React from 'react'

export const ArrowIcon = ({
  strokeWidth = '1.5',
  fill = 'none',
  iconClass = 'stroke-current',
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='10'
    height='13'
    viewBox='0 0 10 13'
    className={iconClass}
  >
    <path
      d='M2.79,11,7.15,6.64a.2.2,0,0,0,0-.29L2.79,2'
      style={{
        fill,
        strokeWidth: `${strokeWidth}px`,
      }}
    />
  </svg>
)
