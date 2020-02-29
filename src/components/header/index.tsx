import React from 'react'
import { Logo } from './logo'
import { Translation } from './translation'

export const Header = () => {
  return (
    <header className='relative w-full bg-gray-800 py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Logo />
        <div className='flex items-center text-white'>
          <div className='flex items-center cursor-pointer hover:opacity-75'>
            v0.1.0
          </div>
          <Translation />
        </div>
      </div>
    </header>
  )
}
