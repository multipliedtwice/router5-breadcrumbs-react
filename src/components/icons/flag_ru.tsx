import React from 'react'
import { useTranslation } from 'react-i18next'

export const IconFlagRU = ({ clickHandler }) => {
  const { t } = useTranslation()
  return (
    <svg
      onClick={clickHandler}
      width='130'
      viewBox='0 0 900 600'
      className='cursor-pointer'
    >
      <title>{t('Switch to Russian')}</title>
      <rect width='900' height='200' fill='#fff' />
      <rect y='400' width='900' height='200' fill='#d52b1e' />
      <rect y='200' width='900' height='200' fill='#0039a6' />
    </svg>
  )
}
