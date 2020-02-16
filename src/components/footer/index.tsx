import React from 'react'
import { Link } from 'react-router5'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className='w-full bg-gray-900 text-white'>
      <section className='container mx-auto py-10 mt-10'>
        <h2 className='mb-8 text-gray-300 text-2xl'>{t('See also')}</h2>
        <div className='w-3/12'>
          <a
            className='mt-4 mb-2 flex'
            href='https://router5-tabs-react.now.sh/'
          >
            <strong>router5-tabs-react</strong>
          </a>
          <p className='text-gray-300'></p>
          <Link routeName={'privacy'}>{t('Privacy')}</Link>
        </div>
      </section>
    </footer>
  )
}
