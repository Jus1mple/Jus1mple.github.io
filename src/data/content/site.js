export const siteContent = {
  zh: {
    nav: {
      about: "关于",
      research: "研究",
      publications: "发表论文",
      projects: "开源项目",
      contact: "联系",
    },
    language: { zh: "中文", en: "EN" },
    hero: {
      name: "修可栋",
      englishName: "Kedong Xiu",
      title: "博士生",
      department: "浙江大学",
      lab: "计算机科学与技术学院",
      advisor: "导师：郑天航；任奎",
      researchAreas: "研究方向",
      researchTopics:
        "大语言模型（LLMs）、多模态大语言模型（MLLMs）与网络空间安全，关注可信与鲁棒 AI 系统。",
      email: "kedongxiu@zju.edu.cn",
      location: "中国 浙江 杭州",
      scholarHref: "https://scholar.google.com/citations?user=yjn-6QkAAAAJ&hl=en",
      cta: { publications: "查看论文", contact: "联系我", scholar: "Google Scholar" },
    },
    about: {
      title: "关于",
      bio1:
        "我是修可栋（Kedong Xiu），浙江大学一年级博士生，有幸由郑天航教授与任奎教授共同指导。",
      bio2:
        "我的研究聚焦 LLM/MLLM 与网络安全的交叉方向，致力于构建可信且鲁棒的 AI 系统；早期研究关注口令安全。",
      interests: "研究兴趣",
      tags: [
        "Jailbreaking",
        "Alignment",
        "Inversion Attack",
        "Agent Security",
        "LLM Security",
        "MLLM Security",
      ],
    },
    news: {
      title: "最新动态",
      labels: {
        paper: "论文",
        award: "奖项",
        details: "详情",
      },
      items: [
        {
          date: "2025/08",
          type: "paper",
          title: "论文被 NDSS 2026 接收",
          link: "https://www.ndss-symposium.org/ndss2026/",
        },
        {
          date: "2025/07",
          type: "paper",
          title: "论文被 ACM Multimedia 2025 接收（NYU 远程实习期间完成）",
          link: "https://acmmm2025.org/",
        },
      ],
    },
    research: {
      title: "研究方向",
      subtitle: "围绕 LLM/MLLM 安全与可信智能展开。",
      areas: [
        { title: "LLM 安全", description: "研究 jailbreak 攻击与防御、模型对齐与安全评测。" },
        { title: "MLLM 安全", description: "关注跨模态攻击面与视觉语言模型的鲁棒性问题。" },
        { title: "反演攻击", description: "探索从模型行为中恢复敏感信息的攻击与缓解策略。" },
        { title: "Agent Security", description: "研究智能体系统中的策略投毒、越权与防护机制。" },
        { title: "口令安全", description: "延续早期口令猜测与认证安全研究经验，连接到新方向。" },
      ],
    },
    projects: {
      title: "开源项目",
      subtitle: "我维护或参与的开源代码与工具。",
      labels: {
        github: "GitHub",
        demo: "演示",
      },
      items: [
        {
          name: "DualBreach",
          type: "Research Code",
          description: "Dual-jailbreaking 相关实现与实验代码，用于复现实验并支持后续研究扩展。",
          stack: ["Python", "PyTorch", "LLM Security"],
          github: "https://github.com/hxz-sec/DualBreach",
          demo: "",
          highlights: ["攻击流程复现", "多目标优化", "实验脚本自动化"],
        },
        {
          name: "Image2CaptionAttack",
          type: "Research Code",
          description: "面向视觉语言模型反演攻击的开源实现，提供训练与评估基线。",
          stack: ["Python", "Vision-Language Models", "Security Evaluation"],
          github: "https://github.com/Jus1mple/Image2CaptionAttack",
          demo: "",
          highlights: ["跨模态攻击流程", "结果可视化", "可扩展评测接口"],
        },
      ],
    },
  },
  en: {
    nav: {
      about: "About",
      research: "Research",
      publications: "Publications",
      projects: "Open Source",
      contact: "Contact",
    },
    language: { zh: "中文", en: "EN" },
    hero: {
      name: "Kedong Xiu",
      englishName: "Kedong Xiu",
      title: "PhD Student",
      department: "Zhejiang University",
      lab: "School of Computer Science and Technology",
      advisor: "Co-advised by Prof. Tianhang Zheng and Prof. Kui Ren",
      researchAreas: "Research Areas",
      researchTopics:
        "Large Language Models (LLMs), Multimodal LLMs (MLLMs), and Cybersecurity for trustworthy and robust AI systems.",
      email: "kedongxiu@zju.edu.cn",
      location: "Hangzhou, Zhejiang, China",
      scholarHref: "https://scholar.google.com/citations?user=yjn-6QkAAAAJ&hl=en",
      cta: { publications: "View Publications", contact: "Contact Me", scholar: "Google Scholar" },
    },
    about: {
      title: "About",
      bio1:
        "I am Kedong Xiu, a first-year PhD student at Zhejiang University, fortunate to be co-advised by Prof. Tianhang Zheng and Prof. Kui Ren.",
      bio2:
        "My research focuses on the intersection of LLMs, MLLMs, and Cybersecurity. Earlier work focused on Password Security.",
      interests: "Research Interests",
      tags: [
        "Jailbreaking",
        "Alignment",
        "Inversion Attack",
        "Agent Security",
        "LLM Security",
        "MLLM Security",
      ],
    },
    news: {
      title: "Recent News",
      labels: {
        paper: "Paper",
        award: "Award",
        details: "Details",
      },
      items: [
        {
          date: "2025/08",
          type: "paper",
          title: "One paper is accepted by NDSS 2026.",
          link: "https://www.ndss-symposium.org/ndss2026/",
        },
        {
          date: "2025/07",
          type: "paper",
          title: "One paper is accepted by ACM Multimedia (MM) 2025.",
          link: "https://acmmm2025.org/",
        },
      ],
    },
    research: {
      title: "Research",
      subtitle: "Core themes around LLM/MLLM security and trustworthy AI.",
      areas: [
        { title: "LLM Security", description: "Jailbreak attack/defense, alignment, and safety evaluation." },
        { title: "MLLM Security", description: "Cross-modality attacks and robustness for vision-language models." },
        { title: "Inversion Attack", description: "Privacy leakage and reconstruction risks from model behavior." },
        { title: "Agent Security", description: "Security risks and defenses for agentic workflows." },
        { title: "Password Security", description: "Previous work on password guessing and authentication security." },
      ],
    },
    projects: {
      title: "Open-Source Projects",
      subtitle: "Open-source repositories and research code I maintain or contribute to.",
      labels: {
        github: "GitHub",
        demo: "Demo",
      },
      items: [
        {
          name: "DualBreach",
          type: "Research Code",
          description: "Implementation and experiment toolkit for dual-jailbreaking research and reproducible evaluations.",
          stack: ["Python", "PyTorch", "LLM Security"],
          github: "https://github.com/hxz-sec/DualBreach",
          demo: "",
          highlights: ["Attack pipeline reproduction", "Multi-target optimization", "Automated experiment scripts"],
        },
        {
          name: "Image2CaptionAttack",
          type: "Research Code",
          description: "Open-source framework for feature inversion attacks on vision-language models.",
          stack: ["Python", "Vision-Language Models", "Security Evaluation"],
          github: "https://github.com/Jus1mple/Image2CaptionAttack",
          demo: "",
          highlights: ["Cross-modality attack flow", "Result visualization", "Extensible evaluation hooks"],
        },
      ],
    },
  },
};
