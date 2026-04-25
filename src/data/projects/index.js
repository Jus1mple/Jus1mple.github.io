import { projectItems } from "./items/index.js";

const meta = {
  zh: {
    title: "开源项目",
    subtitle: "我维护或参与的开源代码与工具。",
    labels: { github: "GitHub", demo: "演示" },
  },
  en: {
    title: "Open-Source Projects",
    subtitle: "Open-source repositories and research code I maintain or contribute to.",
    labels: { github: "GitHub", demo: "Demo" },
  },
};

function itemsFor(lang) {
  return projectItems.map((p) => p[lang]);
}

export const projectsByLang = {
  zh: {
    ...meta.zh,
    items: itemsFor("zh"),
  },
  en: {
    ...meta.en,
    items: itemsFor("en"),
  },
};

