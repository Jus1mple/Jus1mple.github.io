import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";

export default function Projects() {
  const { t } = useLanguage();
  const data = t.projects;

  return (
    <section id="projects" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title={data.title} subtitle={data.subtitle} />

        <div className="space-y-6">
          {data.items.map((p) => (
            <div
              key={p.name}
              className="p-7 border border-gray-200 bg-white hover:border-gray-300 transition-colors"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="heading text-xl font-semibold text-gray-900">
                    {p.name}
                  </div>
                  <div className="mt-3 text-base text-gray-600">
                    <span className="inline-block px-2 py-0.5 mr-2 text-blue-700 bg-blue-50 border border-blue-200">
                      {p.role}
                    </span>
                    <span>{p.period}</span>
                    <span className="mx-2">|</span>
                    <span>{p.funding}</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-gray-700">{p.description}</p>

              {p.highlights.length ? (
                <p className="mt-5 text-sm leading-relaxed text-gray-600">
                  {p.highlights.join(" · ")}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

