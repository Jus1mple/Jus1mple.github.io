import React from "react";
import { BookOpen, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";

export default function Hero() {
  const { t } = useLanguage();
  const data = t.hero;

  return (
    <section id="home" className="min-h-screen bg-white pt-18">
      <div className="mx-auto min-h-[calc(100vh-4.5rem)] max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center rounded-full border border-blue-200 px-4 py-1.5 text-sm font-medium text-blue-700">
            {data.title}
          </div>

          <h1 className="heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {data.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-gray-600">{data.englishName}</p>

          <div className="mt-8 space-y-1 text-base leading-relaxed text-gray-700">
            <p>{data.department}</p>
            <p>{data.lab}</p>
            <p>{data.advisor}</p>
          </div>

          <div className="mt-10">
            <div className="text-base font-medium text-gray-900">
              {data.researchAreas}
            </div>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-gray-700">
              {data.researchTopics}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-base text-gray-700">
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-2 hover:text-blue-700"
            >
              <Mail className="h-5 w-5" />
              {data.email}
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              {data.location}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#publications"
              className="px-6 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800"
            >
              {data.cta.publications}
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 hover:border-gray-400"
            >
              {data.cta.contact}
            </a>
            <a
              href={data.scholarHref || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-6 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 hover:border-gray-400"
            >
              <BookOpen className="h-4 w-4" />
              {data.cta.scholar}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
