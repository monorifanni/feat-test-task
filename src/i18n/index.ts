import { createI18n } from 'vue-i18n'
import translationEn from './locales/en.json'
import translationHu from './locales/hu.json'

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: translationEn,
    hu: translationHu,
  },
})
