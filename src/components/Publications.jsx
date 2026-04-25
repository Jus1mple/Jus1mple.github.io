import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Github, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import { cn } from "../lib/utils";
import PaperOverviewPage from "../pages/PaperOverviewPage.jsx";

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

function getArxivId(pdfLink) {
  if (!hasValidLink(pdfLink)) return null;
  const m = pdfLink.match(/arxiv\.org\/abs\/([0-9]{4}\.[0-9]{4,5}(?:v[0-9]+)?)/i);
  return m ? m[1] : null;
}

function isArxivVenue(venue) {
  return typeof venue === "string" && venue.toLowerCase().includes("arxiv");
}

function normalizeAuthorsForBib(authors) {
  if (typeof authors !== "string") return "";
  return authors
    .replace(/[†*]/g, "")
    .replace(/\s*等$/, "")
    .replace(/，/g, ",")
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean)
    .join(" and ");
}

function bibKeyFromPaper(p) {
  const firstAuthor = (p.authors || "paper").split(",")[0] || "paper";
  const token = firstAuthor.trim().split(/\s+/).pop() || "paper";
  const safeToken = token.toLowerCase().replace(/[^a-z0-9]/g, "");
  return `${safeToken}${p.year || "xxxx"}${p.id || ""}`;
}

function buildBibtex(p) {
  if (typeof p.bibtex === "string" && p.bibtex.trim()) {
    return p.bibtex.trim();
  }

  const arxivId = getArxivId(p.pdf);
  const authors = normalizeAuthorsForBib(p.authors);
  const key = bibKeyFromPaper(p);

  if (arxivId || p.type === "preprint") {
    return `@article{${key},
  title={${p.title}},
  author={${authors}},
  journal={arXiv preprint arXiv:${arxivId || ""}},
  year={${p.year}},
  url={${p.pdf || ""}}
}`;
  }

  return `@inproceedings{${key},
  title={${p.title}},
  author={${authors}},
  booktitle={${p.venue}},
  year={${p.year}},
  url={${p.pdf || ""}}
}`;
}

function emphasizeName(text, name) {
  if (typeof text !== "string" || !text.trim()) return text;
  if (typeof name !== "string" || !name.trim()) return text;

  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(escaped, "gi");
  const parts = text.split(re);
  const matches = text.match(re);
  if (!matches) return text;

  const out = [];
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i]) out.push(parts[i]);
    if (i < matches.length) {
      out.push(
        <span key={`${name}-${i}`} className="font-medium text-gray-700">
          {matches[i]}
        </span>,
      );
    }
  }
  return out;
}

export default function Publications() {
  const { t, language } = useLanguage();
  const data = t.publications;
  const quickViewLabel = data.labels.quickView || (language === "zh" ? "快速浏览" : "Quick View");
  const citeLabel = data.labels.cite || (language === "zh" ? "查看引用" : "View citation");
  const bibTitle = data.labels.bibtex || "BibTeX";
  const closeLabel = data.labels.close || (language === "zh" ? "关闭" : "Close");
  const copyLabel = data.labels.copy || (language === "zh" ? "复制" : "Copy");
  const [expandedPaperId, setExpandedPaperId] = useState(null);
  const [brokenImages, setBrokenImages] = useState({});
  const [citePaper, setCitePaper] = useState(null);
  const [paperModalId, setPaperModalId] = useState(null);

  const methodImageById = useMemo(() => {
    const m = {};
    for (const p of data.list || []) {
      const src = p?.overview?.methodImage;
      m[p.id] = typeof src === "string" ? src : "";
    }
    return m;
  }, [data.list]);

  const prevMethodImageByIdRef = useRef({});

  useEffect(() => {
    const prev = prevMethodImageByIdRef.current || {};
    const ids = new Set([...Object.keys(prev), ...Object.keys(methodImageById)]);

    const changedIds = [];
    for (const id of ids) {
      const nextSrc = methodImageById[id] || "";
      const prevSrc = prev[id] || "";
      if (prevSrc !== nextSrc) changedIds.push(id);
    }

    const isFirstRun = Object.keys(prev).length === 0;
    prevMethodImageByIdRef.current = methodImageById;

    // First run: nothing to reconcile yet.
    if (isFirstRun) return;

    if (!changedIds.length) return;

    setBrokenImages((prevBroken) => {
      let changed = false;
      const nextBroken = { ...prevBroken };
      for (const id of changedIds) {
        if (nextBroken[id]) {
          delete nextBroken[id];
          changed = true;
        }
      }
      return changed ? nextBroken : prevBroken;
    });
  }, [methodImageById]);

  const indexById = useMemo(() => {
    const m = new Map();
    data.list.forEach((p, i) => m.set(p.id, i + 1));
    return m;
  }, [data.list]);

  const modalPublication = useMemo(
    () => data.list.find((p) => p.id === paperModalId) || null,
    [data.list, paperModalId],
  );

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
                      <div className="mt-0.5 w-8 shrink-0 text-right">
                        <span className="inline-flex min-w-8 justify-end px-1.5 py-0.5 text-sm font-medium text-gray-800">
                          {indexById.get(p.id)}.
                        </span>
                      </div>
                      <div className="min-w-0">
                        <button
                          type="button"
                          onClick={() => setPaperModalId(p.id)}
                          className="heading text-left text-lg font-semibold leading-snug text-gray-900 hover:text-blue-800"
                        >
                          {p.title}
                        </button>
                        <div className="mt-2 text-base text-gray-600">
                          {emphasizeName(p.authors, "Kedong Xiu")}
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
                          {isArxivVenue(p.venue) && getArxivId(p.pdf) ? (
                            <span className="text-gray-500">arXiv:{getArxivId(p.pdf)}</span>
                          ) : null}
                          <button
                            type="button"
                            onClick={() => setCitePaper(p)}
                            aria-label={citeLabel}
                            title={citeLabel}
                            className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-sm font-medium text-blue-700 hover:bg-blue-50"
                          >
                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                              <Quote className="h-2.5 w-2.5" strokeWidth={2.4} />
                            </span>
                          </button>
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

                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (isExpanded) {
                          setExpandedPaperId(null);
                          return;
                        }

                        // Always retry image load when opening quick view (covers transient failures / odd truthy flags).
                        setBrokenImages((prev) => {
                          if (!Object.prototype.hasOwnProperty.call(prev, p.id)) return prev;
                          const next = { ...prev };
                          delete next[p.id];
                          return next;
                        });

                        setExpandedPaperId(p.id);
                      }}
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-800 sm:justify-end"
                      aria-expanded={isExpanded}
                    >
                      {quickViewLabel}
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </a>
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
                          key={overview.methodImage}
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

      {citePaper ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-3xl border border-gray-200 bg-white p-5 shadow-xl">
            <div className="mb-3 flex items-center justify-between gap-4">
              <h3 className="heading text-lg font-semibold text-gray-900">{bibTitle}</h3>
              <button
                type="button"
                onClick={() => setCitePaper(null)}
                className="text-sm text-gray-600 hover:text-blue-700"
              >
                {closeLabel}
              </button>
            </div>
            <textarea
              readOnly
              value={buildBibtex(citePaper)}
              className="h-60 w-full resize-y border border-gray-300 p-3 text-sm leading-relaxed text-gray-700 outline-none"
            />
            <div className="mt-3 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(buildBibtex(citePaper));
                }}
                className="border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:border-gray-400"
              >
                {copyLabel}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {paperModalId ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 px-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setPaperModalId(null);
          }}
        >
          <div className="max-h-[85vh] w-full max-w-4xl overflow-auto border border-gray-200 bg-white shadow-xl">
            <PaperOverviewPage
              publication={modalPublication}
              onBack={() => setPaperModalId(null)}
              mode="modal"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
