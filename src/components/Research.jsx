import React from "react";
import SectionHeading from "./SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";

function AreaCard({ area }) {
  return (
    <div className="p-7 border border-gray-200 bg-white hover:border-gray-300 transition-colors">
      <div className="heading text-lg font-semibold text-gray-900">{area.title}</div>
      <p className="mt-3 text-base leading-relaxed text-gray-700">
        {area.description}
      </p>
    </div>
  );
}

export default function Research() {
  const { t } = useLanguage();
  const data = t.research;

  return (
    <section id="research" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title={data.title} subtitle={data.subtitle} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.areas.map((a) => (
            <AreaCard key={a.title} area={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

