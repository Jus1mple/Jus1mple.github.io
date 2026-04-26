import React from "react";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";

function hasValidLink(href) {
  return typeof href === "string" && href.trim() !== "" && href.trim() !== "#";
}

export default function Blogs() {
  const { t } = useLanguage();
  const data = t.blogs;

  return (
    <section id="blogs" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading title={data.title} subtitle={data.subtitle} />

        <div className="space-y-4">
          {data.items.map((item) => {
            const canOpen = hasValidLink(item.href);
            const isExternal = Boolean(item.external);

            return (
              <article
                key={`${item.date}-${item.title}`}
                className="border border-gray-200 bg-white p-6 hover:border-gray-300 transition-colors"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <div className="text-sm text-gray-600">{item.date}</div>
                    <h3 className="heading mt-1 text-lg font-semibold text-gray-900">{item.title}</h3>
                    {item.summary ? <p className="mt-3 text-base leading-relaxed text-gray-600">{item.summary}</p> : null}
                  </div>

                  {canOpen ? (
                    <div className="shrink-0 md:pl-6 md:pt-1">
                      <a
                        href={item.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-800"
                      >
                        {isExternal ? <ExternalLink className="h-4 w-4" /> : null}
                        {isExternal ? data.labels.external : data.labels.read}
                      </a>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
