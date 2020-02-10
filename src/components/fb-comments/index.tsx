import React from 'react'

export const Comments = () => {
  return (
    <div className='w-full flex'>
      <div
        className='fb-comments px-10 sm:px-0 flex'
        data-href='https://developers.facebook.com/docs/plugins/comments#configurator'
        data-width='100%'
        data-numposts=''
      />
    </div>
  )
}
