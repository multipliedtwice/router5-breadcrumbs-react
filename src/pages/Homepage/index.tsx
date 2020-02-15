import React, { Suspense } from 'react'
import { Hero, Features, Iframes, Comments } from '../../components'
import { hero, features } from './data'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'

export const Homepage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<></>}>
        <Hero hero={hero} />
      </Suspense>
      <div className='container mx-auto'>
        <Suspense fallback={<></>}>
          <Features features={features} />
        </Suspense>
        <hr />
        <Iframes />
        <Comments />
      </div>
      <Footer />
    </>
  )
}
