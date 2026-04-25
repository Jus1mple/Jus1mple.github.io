import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";

function typeClass(type) {
  if (type === "paper") return "bg-blue-50 text-blue-700";
  return "bg-amber-50 text-amber-700";
}

export default function News() {
  const { t } = useLanguage();
  const data = t.news;

  return (
    <section id="news" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title={`${data.title} 🎉🎉`} />

        <div className="space-y-3">
          {data.items.map((item) => (
            <div
              key={`${item.date}-${item.title}`}
              className="flex flex-col gap-2 border border-gray-200 bg-white p-5 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex min-w-0 flex-col gap-1 md:flex-row md:items-center md:gap-4">
                <span className="text-sm text-gray-600">{item.date}</span>
                <span className="text-base text-gray-700">{item.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 text-xs ${typeClass(item.type)}`}>
                  {item.type === "paper" ? data.labels.paper : data.labels.award}
                </span>
                {item.link ? (
                  <a href={item.link} className="text-sm text-gray-600 hover:text-blue-700">
                    {data.labels.details}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

