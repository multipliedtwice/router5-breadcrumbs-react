import React from 'react'
import { Hero, Features, Iframes, Comments } from '../../components'
import { hero, features } from './data'

export const Homepage = () => {
  return (
    <>
      <Hero hero={hero} />
      <div className='container mx-auto'>
        <Features features={features} />
        <hr />
        <Iframes />
        <Comments />
      </div>
    </>
  )
}
