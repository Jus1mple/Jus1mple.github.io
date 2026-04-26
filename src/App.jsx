import React, { useEffect } from "react";
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import News from "./components/News.jsx";
import About from "./components/About.jsx";
import Research from "./components/Research.jsx";
import Publications from "./components/Publications.jsx";
import Projects from "./components/Projects.jsx";
import Blogs from "./components/Blogs.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useLanguage } from "./contexts/LanguageContext.jsx";

export default function App() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  return (
    <div className="min-h-screen bg-white text-gray-700">
      <Navigation />

      <main>
        <Hero />
        <News />
        <About />
        <Research />
        <Publications />
        <Projects />
        <Blogs />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
