import React from "react";
import { useLanguage } from "../contexts/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();
  const data = t.footer;

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="heading text-xl font-semibold text-white">{data.name}</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-300">{data.bio}</p>
          </div>

          <div>
            <h4 className="text-base font-medium text-white">{data.resources}</h4>
            <div className="mt-4 space-y-3 text-base">
              {data.resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-medium text-white">{data.contact}</h4>
            <div className="mt-4 space-y-3 text-base text-gray-300">
              {data.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
          {data.copyright}
        </div>
      </div>
    </footer>
  );
}

