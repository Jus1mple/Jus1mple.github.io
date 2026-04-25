import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";

export default function About() {
  const { t } = useLanguage();
  const data = t.about;

  return (
    <section id="about" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading title={data.title} />

        <div className="space-y-6 text-base leading-relaxed text-gray-700">
          <p>{data.bio1}</p>
          <p>{data.bio2}</p>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-lg font-medium text-gray-900">{data.interests}</h3>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs text-gray-600 bg-white border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

