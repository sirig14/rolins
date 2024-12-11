import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLng = 'es';
const supportedLngs = ['es', 'en'];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    supportedLngs,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/local/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'],
    },
  });

export default i18n;