import React from 'react'
import { Logo } from './logo'
import { Translation } from './translation'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation()
  return (
    <header className='w-full bg-gray-800 py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Logo />
        <span className='flex items-center text-white'>
          <span className='flex items-center cursor-pointer'>v0.1.0</span>
          <span className='flex items-center ml-4 cursor-pointer'>
            <Translation />
            <span className='ml-2'>{t('Languages')}</span>
          </span>
          <span className='flex items-center'></span>
        </span>
      </div>
    </header>
  )
}
