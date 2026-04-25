import React, { useMemo, useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { cn } from "../lib/utils";

function typeBadgeClass(type) {
  if (type === "journal") return "bg-blue-50 text-blue-700";
  if (type === "conference") return "bg-green-50 text-green-700";
  return "bg-gray-100 text-gray-600";
}

function typeBadgeLabel(type, labels) {
  if (type === "journal") return labels.journal;
  if (type === "conference") return labels.conference;
  return labels.preprint;
}

function ActionLink({ href, children, icon: Icon }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-blue-700"
    >
      <Icon className="h-3.5 w-3.5" />
      {children}
    </a>
  );
}

function hasValidLink(href) {
  return typeof href === "string" && href.trim() !== "" && href.trim() !== "#";
}

export default function Publications({ onViewDetails }) {
  const { t, language } = useLanguage();
  const data = t.publications;
  const quickViewLabel = data.labels.quickView || (language === "zh" ? "快速浏览" : "Quick View");
  const [expandedPaperId, setExpandedPaperId] = useState(null);
  const [brokenImages, setBrokenImages] = useState({});

  const indexById = useMemo(() => {
    const m = new Map();
    data.list.forEach((p, i) => m.set(p.id, i + 1));
    return m;
  }, [data.list]);

  return (
    <section id="publications" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading title={data.title} className="mb-6" />
        {data.contributionNote ? (
          <p className="mb-4 text-xs text-gray-600">{data.contributionNote}</p>
        ) : null}

        <div className="space-y-4">
          {data.list.map((p) => {
            const isExpanded = expandedPaperId === p.id;
            const overview = p.overview || {};
            const hasMethodImage = hasValidLink(overview.methodImage) && !brokenImages[p.id];

            return (
              <div
                key={p.id}
                className="bg-white p-5 border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-8 shrink-0 text-right text-sm text-gray-600">
                        {indexById.get(p.id)}.
                      </div>
                      <div className="min-w-0">
                        <div className="heading text-lg font-semibold leading-snug text-gray-900">
                          {p.title}
                        </div>
                        <div className="mt-2 text-base text-gray-600">
                          {p.authors}
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                          <span
                            className={cn(
                              "inline-flex px-2 py-1",
                              typeBadgeClass(p.type),
                            )}
                          >
                            {typeBadgeLabel(p.type, data.labels)}
                          </span>
                          <span className="text-gray-600">{p.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-2 sm:w-44 sm:items-end sm:self-stretch sm:justify-between">
                    <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                      {hasValidLink(p.pdf) ? (
                        <ActionLink href={p.pdf} icon={ExternalLink}>
                          {data.labels.pdf}
                        </ActionLink>
                      ) : null}
                      {hasValidLink(p.code) ? (
                        <ActionLink href={p.code} icon={Github}>
                          {data.labels.code}
                        </ActionLink>
                      ) : null}
                    </div>

                    <div className="flex items-center gap-3 sm:justify-end">
                      {typeof onViewDetails === "function" ? (
                        <button
                          type="button"
                          onClick={() => onViewDetails(p.id)}
                          className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-blue-700"
                        >
                          {quickViewLabel}
                        </button>
                      ) : null}

                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() => setExpandedPaperId(isExpanded ? null : p.id)}
                        className="inline-flex items-center text-gray-500 hover:text-blue-700"
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {isExpanded ? (
                  <div className="mt-4 border-t border-gray-100 pt-4 pl-11">
                    <p className="text-sm leading-relaxed text-gray-600">
                      {overview.summary || data.labels.summaryPlaceholder}
                    </p>

                    <div className="mt-4">
                      {hasMethodImage ? (
                        <img
                          src={overview.methodImage}
                          alt={overview.methodImageAlt || p.title}
                          onError={() => {
                            setBrokenImages((prev) => ({ ...prev, [p.id]: true }));
                          }}
                          className="max-h-72 w-full max-w-2xl border border-gray-200 object-contain"
                        />
                      ) : (
                        <div className="flex h-48 w-full max-w-2xl items-center justify-center border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-500">
                          {data.labels.methodImagePlaceholder}
                        </div>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
