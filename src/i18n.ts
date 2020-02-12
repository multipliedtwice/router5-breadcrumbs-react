import i18n from 'i18next'
// import Backend from 'i18next-xhr-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import resources from './locales'

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'en',
  nsSeparator: false,
  keySeparator: false,
})

export default i18n
