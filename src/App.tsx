import React, { useEffect } from 'react'
import './styles/styles.css'
import { Layout } from './components'
import { useRouteNode, useRoute } from 'react-router5'
import { Homepage, NotFound } from './pages'
import { Privacy } from './pages/PrivacyPolicy'
import i18next from 'i18next'
import i18n from './i18n'

type PagesType = {
  [routeName: string]: React.ReactElement
}

const pages: PagesType = {
  en: <Homepage />,
  ru: <Homepage />,
  'en.privacy': <Privacy />,
  'ru.privacy': <Privacy />,
}

export const App = () => {
  const { route } = useRouteNode('')
  let [page] = route.name.split('.')

  const {
    route: { name },
    router: { navigate },
  } = useRoute()

  useEffect(() => {
    if (i18n.language !== name) {
      i18n.changeLanguage(name)
    }
  })

  i18next.on('languageChanged', lang => {
    navigate(lang)
  })

  const Page = pages[page] || <NotFound />

  return <Layout>{Page}</Layout>
}
