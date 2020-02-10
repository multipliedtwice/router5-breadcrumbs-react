import React, { FunctionComponent } from 'react'
import { Breadcrumbs } from '../../lib'
import { Github } from '../icons'

type Props = {
  children: React.ReactElement
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <div className='flex justify-center fixed right-0 left-0 bottom-0 z-10'>
        <a href='https://github.com/thousandsofraccoons/router5-breadcrumbs-react'>
          <Github />
        </a>
      </div>
      <Breadcrumbs />
      {React.cloneElement(children, { customProp: 'Hello' })}
    </>
  )
}
