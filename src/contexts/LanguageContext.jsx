import React, { createContext, useContext, useMemo, useState } from "react";
import { translations } from "../data/homeData.js";

const LanguageContext = createContext(null);
const STORAGE_KEY = "preferred-language";

function getInitialLanguage() {
  if (typeof window === "undefined") return "zh";
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "zh" || saved === "en" ? saved : "zh";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  const setLang = (lang) => {
    if (lang !== "zh" && lang !== "en") return;
    setLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const toggleLanguage = () => {
    const next = language === "zh" ? "en" : "zh";
    setLang(next);
  };

  const t = useMemo(() => translations[language], [language]);

  const value = useMemo(
    () => ({ language, toggleLanguage, setLang, t }),
    [language, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

