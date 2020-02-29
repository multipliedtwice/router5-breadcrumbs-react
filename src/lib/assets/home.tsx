import React from 'react'

export const HomeIcon = ({
  title = 'To Homepage',
  strokeWidth = '1.5',
  fill = 'none',
  iconClass = 'mr-2 stroke-current',
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='14'
    height='14'
    viewBox='0 0 20 20'
    className={iconClass}
  >
    <title>{title}</title>
    <path
      d='M17,10.5v7.85a1.25,1.25,0,0,1-1.33,1.15H4.33A1.25,1.25,0,0,1,3,18.35V10.5'
      transform='translate(-0.25 -0.85)'
      style={{
        fill,
        strokeWidth: `${strokeWidth}px`,
      }}
    />
    <path
      d='M1.4,11H18.6a.4.4,0,0,0,.28-.68l-8.6-8.6a.4.4,0,0,0-.56,0l-8.6,8.6A.4.4,0,0,0,1.4,11Z'
      transform='translate(-0.25 -0.85)'
      style={{
        fill,
        strokeWidth: `${strokeWidth}px`,
      }}
    />
  </svg>
)
