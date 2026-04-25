import React from "react";
import { BookOpen, Compass, GraduationCap, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext.jsx";

function renderAdvisorLine(advisorText) {
  if (typeof advisorText !== "string" || !advisorText.trim()) return advisorText;

  const tianhang = "郑天航";
  const kuiren = "任奎";

  const parts = advisorText.split(/(郑天航|任奎)/g);
  return (
    <>
      <span className="mr-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700 align-middle">
        <GraduationCap className="h-3.5 w-3.5" />
      </span>
      {parts.map((part, i) => {
        if (part === tianhang) {
          return (
            <a
              key={`advisor-${i}`}
              href="https://tianzheng4.github.io/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gray-700 hover:text-blue-700"
            >
              {tianhang}
            </a>
          );
        }
        if (part === kuiren) {
          return (
            <a
              key={`advisor-${i}`}
              href="https://person.zju.edu.cn/kuiren"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gray-700 hover:text-blue-700"
            >
              {kuiren}
            </a>
          );
        }
        return <React.Fragment key={`advisor-${i}`}>{part}</React.Fragment>;
      })}
    </>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const data = t.hero;

  const showZjuMark =
    typeof data.department === "string" &&
    (data.department.includes("浙江大学") ||
      data.department.toLowerCase().includes("zhejiang university"));

  return (
    <section id="home" className="min-h-screen bg-white pt-18">
      <div className="mx-auto min-h-[calc(100vh-4.5rem)] max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center rounded-full border border-blue-200 px-4 py-1.5 text-sm font-medium text-blue-700">
            {data.title}
          </div>

          <h1 className="heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {data.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-gray-600">{data.englishName}</p>

          <div className="mt-8 space-y-1 text-base leading-relaxed text-gray-700">
            <p>
              {showZjuMark ? (
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] font-semibold text-blue-700 align-middle">
                  ZJU
                </span>
              ) : null}
              {data.department}
              {data.lab ? <span className="mx-2 text-gray-400">·</span> : null}
              {data.lab}
            </p>
            <p>{renderAdvisorLine(data.advisor)}</p>
          </div>

          <div className="mt-10">
            <div className="inline-flex items-center gap-2 text-base font-semibold text-gray-900">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <Compass className="h-3.5 w-3.5" />
              </span>
              {data.researchAreas}
            </div>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-gray-700">
              {data.researchTopics}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-base text-gray-700">
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-2 hover:text-blue-700"
            >
              <Mail className="h-5 w-5" />
              {data.email}
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              {data.location}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#publications"
              className="px-6 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800"
            >
              {data.cta.publications}
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 hover:border-gray-400"
            >
              {data.cta.contact}
            </a>
            <a
              href={data.scholarHref || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-6 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 hover:border-gray-400"
            >
              <BookOpen className="h-4 w-4" />
              {data.cta.scholar}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
