import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";

function Progress({ value }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
      <div
        className="h-full rounded-full bg-blue-600"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const data = t.skills;

  return (
    <section id="skills" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title={data.title} subtitle={data.subtitle} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.categories.map((cat) => (
            <div
              key={cat.name}
              className="p-7 border border-gray-200 bg-white hover:border-gray-300 transition-colors"
            >
              <div className="mb-4 text-xs font-medium tracking-widest text-gray-600 uppercase">
                {cat.name}
              </div>
              <div className="space-y-5">
                {cat.skills.map((it) => (
                  <div key={it.name}>
                    <div className="flex items-center justify-between text-base">
                      <div className="text-gray-700">{it.name}</div>
                      <div className="text-gray-600">{it.level}%</div>
                    </div>
                    <div className="mt-2">
                      <Progress value={it.level} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-7 border border-gray-200 bg-white">
          <div className="heading text-lg font-semibold text-gray-900">
            {data.additionalTitle}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.additional.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs text-gray-600 bg-gray-50 border border-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

