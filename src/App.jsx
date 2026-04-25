import React, { useCallback, useEffect, useMemo, useState } from "react";
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import News from "./components/News.jsx";
import About from "./components/About.jsx";
import Research from "./components/Research.jsx";
import Publications from "./components/Publications.jsx";
import Projects from "./components/Projects.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useLanguage } from "./contexts/LanguageContext.jsx";
import PaperOverviewPage from "./pages/PaperOverviewPage.jsx";

function getPaperIdFromUrl() {
  if (typeof window === "undefined") return null;
  const paperId = new URLSearchParams(window.location.search).get("paper");
  return paperId && paperId.trim() ? paperId.trim() : null;
}

export default function App() {
  const { language, t } = useLanguage();
  const [activePaperId, setActivePaperId] = useState(getPaperIdFromUrl);

  const activePaper = useMemo(
    () => t.publications.list.find((paper) => paper.id === activePaperId) || null,
    [activePaperId, t.publications.list],
  );

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  useEffect(() => {
    const handlePopState = () => {
      setActivePaperId(getPaperIdFromUrl());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openPaperOverview = useCallback((paperId) => {
    const url = new URL(window.location.href);
    url.searchParams.set("paper", paperId);
    window.history.pushState({ paper: paperId }, "", `${url.pathname}?${url.searchParams.toString()}`);
    setActivePaperId(paperId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const closePaperOverview = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("paper");
    const nextSearch = url.searchParams.toString();
    const nextUrl = `${url.pathname}${nextSearch ? `?${nextSearch}` : ""}`;
    window.history.pushState({}, "", nextUrl);
    setActivePaperId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (activePaperId) {
    return <PaperOverviewPage publication={activePaper} onBack={closePaperOverview} />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-700">
      <Navigation />

      <main>
        <Hero />
        <News />
        <About />
        <Research />
        <Publications onViewDetails={openPaperOverview} />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
