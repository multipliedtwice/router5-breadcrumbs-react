import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationIcon, IconFlagEN, IconFlagRU } from '../icons'
import i18n from '../../i18n'

export const Translation = () => {
  const { t } = useTranslation()
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false)
  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className='ml-4'>
      <div
        onClick={() => setIsMenuShown(prev => !prev)}
        className='flex items-center cursor-pointer hover:opacity-75'
      >
        <TranslationIcon />
        <div className='ml-2'>{t('Languages')}</div>
      </div>
      <div
        className={`absolute left-0 right-0 top-full z-3 
          w-full h-lang bg-gray-900 flex items-center 
          justify-center ${isMenuShown ? '' : 'hidden'}`}
      >
        <div className='flex'>
          <IconFlagEN
            clickHandler={() => {
              changeLanguage('en')
              setIsMenuShown(false)
            }}
          />
          <IconFlagRU
            clickHandler={() => {
              changeLanguage('ru')
              setIsMenuShown(false)
            }}
          />
        </div>
      </div>
    </div>
  )
}
