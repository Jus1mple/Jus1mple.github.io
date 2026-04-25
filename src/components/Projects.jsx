import React from "react";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";

export default function Projects() {
  const { t } = useLanguage();
  const data = t.projects;

  return (
    <section id="projects" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title={data.title} subtitle={data.subtitle} />

        <div className="grid gap-6 md:grid-cols-2">
          {data.items.map((p) => (
            <div
              key={p.name}
              className="flex h-full flex-col p-7 border border-gray-200 bg-white hover:border-gray-300 transition-colors"
            >
              <div className="flex flex-col gap-2">
                <div>
                  <div className="heading text-xl font-semibold text-gray-900">
                    {p.name}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="inline-flex px-2 py-0.5 text-sm text-blue-700 bg-blue-50 border border-blue-200">
                      {p.type}
                    </div>
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={data.labels.github}
                        title={data.labels.github}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-md text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-base leading-relaxed text-gray-700">{p.description}</p>

              {Array.isArray(p.stack) && p.stack.length ? (
                <p className="mt-4 text-sm text-gray-600">{p.stack.join(" · ")}</p>
              ) : null}

              {p.demo ? (
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-blue-700"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {data.labels.demo}
                  </a>
                </div>
              ) : null}

              {Array.isArray(p.highlights) && p.highlights.length ? (
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

