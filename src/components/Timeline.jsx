import React from "react";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { cn } from "../lib/utils";

function iconByType(type) {
  if (type === "education") return GraduationCap;
  if (type === "work") return Briefcase;
  return Award;
}

function iconColorByType(type) {
  if (type === "education") return "bg-blue-50 text-blue-700";
  if (type === "work") return "bg-slate-100 text-slate-700";
  return "bg-amber-100 text-amber-700";
}

export default function Timeline() {
  const { t } = useLanguage();
  const data = t.timeline;

  return (
    <section id="timeline" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading title={data.title} subtitle={data.subtitle} />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-stone-200 sm:left-6" />

          <div className="space-y-8">
            {data.milestones.map((it, idx) => {
              const Icon = iconByType(it.type);
              return (
                <div key={`${it.year}-${idx}`} className="relative pl-12 sm:pl-16">
                  <div
                    className={cn(
                      "absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center rounded-full sm:left-2",
                      iconColorByType(it.type),
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="border border-gray-200 bg-white p-7">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div className="heading text-lg font-semibold text-gray-900">
                        {it.title}
                      </div>
                      <div className="text-sm text-gray-600">{it.year}</div>
                    </div>
                    <div className="mt-4 text-base leading-relaxed text-gray-700">
                      {it.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

