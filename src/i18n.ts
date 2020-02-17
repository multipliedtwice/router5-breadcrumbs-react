import i18n from 'i18next'
// import Backend from 'i18next-xhr-backend'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import resources from './locales'
import i18next from 'i18next'

const detection = {
  // order and from where user language should be detected
  order: [
    'localStorage',
    'cookie',
    'navigator',
    'path',
    'querystring',
    'htmlTag',
    'subdomain',
  ],

  // keys or params to lookup language from
  lookupQuerystring: false,
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    // nsSeparator: false,
    keySeparator: false,
    detection,
  })

export default i18n
