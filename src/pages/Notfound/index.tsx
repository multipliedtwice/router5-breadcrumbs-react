import React from 'react'
// import { Breadcrumbs } from '../../lib'
import { Link } from 'react-router5'
import { useTranslation } from 'react-i18next'

export const NotFound = () => {
  const { t } = useTranslation()
  const path =
    'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
  return (
    <div
      className='w-full h-screen'
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backgroundBlendMode: 'multiply',
        backgroundImage: `url(${path}&fit=clip&q=80&w=${window.innerWidth *
          window.devicePixelRatio}&fit=crop&h=${window.innerHeight *
          window.devicePixelRatio})`,
      }}
    >
      {/* <Breadcrumbs
        classes={{
          activeLink: 'flex items-baseline hover:underline mx-2',
          activeCrumb: 'list-none flex items-baseline text-white',
          currentPage: 'text-gray-400 ml-2',
        }}
      /> */}
      <div className='absolute left-0 right-0 top-0 text-white h-screen flex flex-col justify-center items-center'>
        <h1>{t('Not Found')}</h1>
        <Link
          routeName={'en'}
          className='px-8 py-4 bg-white text-gray-800 mt-8 rounded-lg'
        >
          {t('Go to homepage')}
        </Link>
      </div>
    </div>
  )
}
