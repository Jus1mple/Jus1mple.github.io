import React from "react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";

function hasValidLink(href) {
  return typeof href === "string" && href.trim() !== "" && href.trim() !== "#";
}

export default function PaperOverviewPage({ publication, onBack }) {
  const { language } = useLanguage();

  if (!publication) {
    return (
      <div className="min-h-screen bg-white text-gray-700">
        <main className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === "zh" ? "返回主页" : "Back to Home"}
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

  return (
    <div className="min-h-screen bg-white text-gray-700">
      <main className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          {language === "zh" ? "返回主页" : "Back to Home"}
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
          </div>

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
        </article>
      </main>
    </div>
  );
}
