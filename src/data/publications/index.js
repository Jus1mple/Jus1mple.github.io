import { publicationItems } from "./items";

function pickLang(item, lang) {
  return item?.[lang] ?? item?.en ?? item?.zh ?? item;
}

export const publicationsByLang = {
  zh: {
    title: "发表论文",
    contributionNote: "（† 表示共同贡献，* 表示通讯作者。）",
    labels: {
      all: "全部",
      journal: "期刊",
      conference: "会议",
      preprint: "预印本",
      citations: "次引用",
      pdf: "PDF",
      code: "代码",
      quickView: "快速浏览",
      cite: "引用",
      bibtex: "BibTeX 引用",
      close: "关闭",
      copy: "复制",
      summaryPlaceholder:
        "这里将展示该论文的简要描述，方便访客快速了解问题、方法与结果。",
      methodImagePlaceholder: "方法核心图片待补充",
    },
    list: publicationItems.map((p) => pickLang(p, "zh")),
  },
  en: {
    title: "Publications",
    contributionNote: "(† denotes equal contribution, * denotes the corresponding author.)",
    labels: {
      all: "All",
      journal: "Journal",
      conference: "Conference",
      preprint: "Preprint",
      citations: "citations",
      pdf: "PDF",
      code: "Code",
      quickView: "Quick View",
      cite: "Cite",
      bibtex: "BibTeX Citation",
      close: "Close",
      copy: "Copy",
      summaryPlaceholder:
        "A short overview of this paper will be shown here for quick understanding.",
      methodImagePlaceholder: "Core method figure to be added",
    },
    list: publicationItems.map((p) => pickLang(p, "en")),
  },
};

