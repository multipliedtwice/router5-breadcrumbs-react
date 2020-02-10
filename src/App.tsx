import React from 'react'
import './styles/styles.css'
import { Layout } from './components'
import { useRouteNode } from 'react-router5'
import { Homepage, NotFound } from './pages'
import { Privacy } from './pages/PrivacyPolicy'

type PagesType = {
  [routeName: string]: React.ReactElement
}

const pages: PagesType = {
  home: <Homepage />,
  privacy: <Privacy />,
  first: <Homepage />,
  'first.second': <Homepage />,
  'first.second.third': <Homepage />,
}

export const App = () => {
  const { route } = useRouteNode('')
  let [page] = route.name.split('.')
  const Page = pages[page] || <NotFound />

  return <Layout>{Page}</Layout>
}
