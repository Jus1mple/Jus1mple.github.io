import { siteContent } from "./content/site.js";
import { publicationsContent } from "./content/publications.js";
import { profileContent } from "./content/profile.js";

function mergeLocale(lang) {
  return {
    ...siteContent[lang],
    ...publicationsContent[lang],
    ...profileContent[lang],
  };
}

export const translations = {
  zh: mergeLocale("zh"),
  en: mergeLocale("en"),
};

