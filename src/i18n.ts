import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      placeholder: "Sartu EHko edozein herri",
      guess: "Asmatu",
      share: "Zabaldu",
      showOnGoogleMaps: "👀 OpenStreetMaps-en",
      welldone: "Ondo!",
      unknownCountry: "Herri ezezaguna!",
      copy: "Emaitzak arbelean kopiatuta!",
      showCountry: "🗺️ Erakutsi mapan!",
      cancelRotation: "🌀 Ezeztatu errotazioa",
      settings: {
        title: "Aukerak",
        distanceUnit: "Distantzia unitatea",
        theme: "Gaia",
        difficultyModifiers: "Zailtasun aldagaiak",
        startingNextDay: "Bihar egingo dira aldaketak!",
        noImageMode: "Ezkutatu herriaren irudia",
        rotationMode: "Errotatu ausaz herriaren irudia.",
      },
      buyMeACoffee: "Erosi iezaiozu kafetxo bat ☕!",
    },
  },
  eu: {
    translation: {
      placeholder: "Sartu EHko edozein herri",
      guess: "Asmatu",
      share: "Zabaldu",
      showOnGoogleMaps: "👀 OpenStreetMaps-en",
      welldone: "Ondo!",
      unknownCountry: "Herri ezezaguna!",
      copy: "Emaitzak arbelean kopiatuta!",
      showCountry: "🗺️ Erakutsi mapan!",
      cancelRotation: "🌀 Ezeztatu errotazioa",
      settings: {
        title: "Aukerak",
        distanceUnit: "Distantzia unitatea",
        theme: "Gaia",
        difficultyModifiers: "Zailtasun aldagaiak",
        startingNextDay: "Bihar egingo dira aldaketak!",
        noImageMode: "Ezkutatu herriaren irudia",
        rotationMode: "Errotatu ausaz herriaren irudia.",
      },
      buyMeACoffee: "Erosi iezaiozu kafetxo bat ☕!",
    },
  },
  es: {
    translation: {
      placeholder: "Sartu EHko edozein herri",
      guess: "Asmatu",
      share: "Zabaldu",
      showOnGoogleMaps: "👀 OpenStreetMaps-en",
      welldone: "Ondo!",
      unknownCountry: "Herri ezezaguna!",
      copy: "Emaitzak arbelean kopiatuta!",
      showCountry: "🗺️ Erakutsi mapan!",
      cancelRotation: "🌀 Ezeztatu errotazioa",
      settings: {
        title: "Aukerak",
        distanceUnit: "Distantzia unitatea",
        theme: "Gaia",
        difficultyModifiers: "Zailtasun aldagaiak",
        startingNextDay: "Bihar egingo dira aldaketak!",
        noImageMode: "Ezkutatu herriaren irudia",
        rotationMode: "Errotatu ausaz herriaren irudia.",
      },
      buyMeACoffee: "Erosi iezaiozu kafetxo bat ☕!",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
