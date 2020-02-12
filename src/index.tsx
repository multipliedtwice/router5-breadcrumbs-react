import React from 'react'
import { App } from './App'
import { RouterProvider } from 'react-router5'
import createRouter from './create-router'
import { render } from 'react-snapshot'
import './i18n'

const router = createRouter({
  listener: true,
  logger: true,
})

const Application = () => (
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)

document.addEventListener('DOMContentLoaded', () => {
  router.start(() => {
    render(<Application />, document.getElementById('root'))
  })
})
