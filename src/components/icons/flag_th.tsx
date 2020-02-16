import React from 'react'
import { useTranslation } from 'react-i18next'

export const IconFlagTH = ({ clickHandler }) => {
  const { t } = useTranslation()
  return (
    <svg
      onClick={clickHandler}
      viewBox='0 0 900 600'
      width='130'
      className='cursor-pointer'
    >
      <title>{t('Switch to Thai')}</title>
      <rect width='900' height='600' fill='#a51931' />
      <rect y='100' width='900' height='400' fill='#f4f5f8' />
      <rect y='200' width='900' height='200' fill='#2d2a4a' />
    </svg>
  )
}
