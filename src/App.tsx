import React, { useEffect } from 'react'
import './styles/styles.css'
import { Layout } from './components'
import { useRoute } from 'react-router5'
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
  const {
    route: { name },
    router: { navigate },
  } = useRoute()

  useEffect(() => {
    const [languagePrefix] = name.split('.')
    if (i18n.language !== languagePrefix) {
      i18n.changeLanguage(languagePrefix)
    }
  })

  i18next.on('languageChanged', lang => {
    navigate(lang)
  })

  const Page = pages[name] || <NotFound />

  return <Layout>{Page}</Layout>
}
