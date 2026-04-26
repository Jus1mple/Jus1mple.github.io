import React, { useEffect, useMemo, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { cn } from "../lib/utils";

const NAV_ORDER = ["about", "research", "publications", "projects", "blogs", "contact"];

export default function Navigation() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = useMemo(
    () =>
      NAV_ORDER.map((key) => ({
        key,
        label: t.nav[key],
        href: `#${key}`,
      })),
    [t],
  );

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (!element) return;
    const offset = 80;
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      for (const section of [...NAV_ORDER].reverse()) {
        const element = document.getElementById(section);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-18 border-b border-gray-200 bg-white",
          isScrolled && "shadow-sm backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a href="#home" className="heading text-lg font-semibold text-gray-900">
            {t.hero.name}
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative pb-1 text-sm text-gray-600 hover:text-blue-700",
                  activeSection === item.key && "text-blue-700",
                )}
              >
                {item.label}
                {activeSection === item.key ? (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-700" />
                ) : null}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-3 py-2.5 text-sm text-gray-700 hover:border-gray-400"
            >
              <Globe className="h-4 w-4" />
              {language === "zh" ? t.language.en : t.language.zh}
            </button>

            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 p-2 lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Open mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-white pt-18 lg:hidden">
          <nav className="flex flex-col gap-6 px-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="border-b border-gray-200 pb-3 text-lg font-medium text-gray-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
