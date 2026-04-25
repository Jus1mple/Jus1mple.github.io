import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Copy, ExternalLink, Github, Quote } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import renderMathInElement from "katex/contrib/auto-render";
import "katex/dist/katex.min.css";

function hasValidLink(href) {
  return typeof href === "string" && href.trim() !== "" && href.trim() !== "#";
}

export default function PaperOverviewPage({ publication, onBack, mode = "page" }) {
  const { language } = useLanguage();
  const isModal = mode === "modal";
  const [isBibOpen, setIsBibOpen] = useState(false);
  const detailsRef = useRef(null);

  const bibLabel = useMemo(
    () => (language === "zh" ? "引用" : "Cite"),
    [language],
  );
  const bibTitle = useMemo(
    () => (language === "zh" ? "BibTeX 引用" : "BibTeX Citation"),
    [language],
  );
  const copyLabel = useMemo(
    () => (language === "zh" ? "复制" : "Copy"),
    [language],
  );

  if (!publication) {
    return (
      <div className={isModal ? "bg-white text-gray-700" : "min-h-screen bg-white text-gray-700"}>
        <main className={isModal ? "mx-auto max-w-4xl px-6 py-6 lg:px-8" : "mx-auto max-w-4xl px-6 py-20 lg:px-8"}>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            {isModal
              ? language === "zh"
                ? "关闭"
                : "Close"
              : language === "zh"
                ? "返回主页"
                : "Back to Home"}
          </button>

          <div className="mt-8 border border-gray-200 bg-white p-8">
            <h1 className="heading text-2xl font-semibold text-gray-900">
              {language === "zh" ? "未找到对应论文" : "Paper Not Found"}
            </h1>
            <p className="mt-3 text-base text-gray-600">
              {language === "zh"
                ? "请从论文列表重新进入。"
                : "Please return to the publication list and try again."}
            </p>
          </div>
        </main>
      </div>
    );
  }

  const detailsHtml =
    typeof publication.detailsHtml === "string" ? publication.detailsHtml : "";
  const detailsCss =
    typeof publication.detailsCss === "string" ? publication.detailsCss : "";
  const hasDetails = Boolean(detailsHtml.trim());

  useEffect(() => {
    if (!hasDetails) return;
    const el = detailsRef.current;
    if (!el) return;

    renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
      ],
      throwOnError: false,
      strict: "ignore",
    });
  }, [hasDetails, detailsHtml]);

  return (
    <div className={isModal ? "bg-white text-gray-700" : "min-h-screen bg-white text-gray-700"}>
      <main className={isModal ? "mx-auto max-w-4xl px-6 py-6 lg:px-8" : "mx-auto max-w-4xl px-6 py-20 lg:px-8"}>
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          {isModal
            ? language === "zh"
              ? "关闭"
              : "Close"
            : language === "zh"
              ? "返回主页"
              : "Back to Home"}
        </button>

        <article className="mt-8 border border-gray-200 bg-white p-8">
          <p className="text-sm text-gray-500">
            {language === "zh" ? "论文快速浏览页" : "Paper Quick Overview"}
          </p>

          <h1 className="heading mt-2 text-2xl font-semibold leading-snug text-gray-900">
            {publication.title}
          </h1>

          <p className="mt-4 text-base text-gray-600">{publication.authors}</p>
          <p className="mt-1 text-sm text-gray-500">
            {publication.venue} · {publication.year}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {hasValidLink(publication.pdf) ? (
              <a
                href={publication.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:border-gray-400"
              >
                <ExternalLink className="h-4 w-4" />
                PDF
              </a>
            ) : null}
            {hasValidLink(publication.code) ? (
              <a
                href={publication.code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:border-gray-400"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            ) : null}
            {typeof publication.bibtex === "string" && publication.bibtex.trim() ? (
              <button
                type="button"
                onClick={() => setIsBibOpen((v) => !v)}
                className="inline-flex items-center gap-1 border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:border-gray-400"
              >
                <Quote className="h-4 w-4" />
                {bibLabel}
              </button>
            ) : null}
          </div>

          {isBibOpen && typeof publication.bibtex === "string" && publication.bibtex.trim() ? (
            <section className="mt-6 border border-gray-200 bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-gray-900">{bibTitle}</div>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard?.writeText(publication.bibtex.trim());
                  }}
                  className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-blue-700"
                >
                  <Copy className="h-4 w-4" />
                  {copyLabel}
                </button>
              </div>
              <textarea
                readOnly
                value={publication.bibtex.trim()}
                className="mt-3 h-44 w-full resize-y border border-gray-300 p-3 text-sm leading-relaxed text-gray-700 outline-none"
              />
            </section>
          ) : null}

          {hasDetails ? (
            <section className="mt-8 border-t border-gray-100 pt-6">
              {detailsCss.trim() ? (
                <style>{detailsCss}</style>
              ) : null}
              <div
                ref={detailsRef}
                className="paper-details prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: detailsHtml }}
              />
            </section>
          ) : (
            <section className="mt-8 border-t border-gray-100 pt-6">
              <h2 className="text-lg font-medium text-gray-900">
                {language === "zh" ? "内容占位（待你补充）" : "Placeholder Content (To Be Filled)"}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {language === "zh"
                  ? "这里已预留为论文快速浏览页，你后续可以加入摘要、方法图、关键贡献、实验结果、局限性与FAQ。"
                  : "This page is ready for your paper overview. You can later add abstract, method figure, key contributions, results, limitations, and FAQ."}
              </p>
            </section>
          )}
        </article>
      </main>
    </div>
  );
}
