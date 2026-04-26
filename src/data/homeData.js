import { siteContent } from "./content/site.js";
import { blogsContent } from "./content/blogs.js";
import { publicationsContent } from "./content/publications.js";
import { profileContent } from "./content/profile.js";

function mergeLocale(lang) {
  return {
    ...siteContent[lang],
    ...blogsContent[lang],
    ...publicationsContent[lang],
    ...profileContent[lang],
  };
}

export const translations = {
  zh: mergeLocale("zh"),
  en: mergeLocale("en"),
};

