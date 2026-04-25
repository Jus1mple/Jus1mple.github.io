export const profileContent = {
  zh: {
    skills: {
      title: "技能栈",
      subtitle: "研究与工程能力概览。",
      additionalTitle: "其他能力",
      categories: [
        {
          name: "研究方向",
          skills: [
            { name: "LLM Security", level: 90 },
            { name: "MLLM Security", level: 86 },
            { name: "Password Security", level: 82 },
          ],
        },
        {
          name: "研究能力",
          skills: [
            { name: "Paper Writing", level: 88 },
            { name: "Experiment Design", level: 87 },
            { name: "Benchmarking", level: 84 },
          ],
        },
        {
          name: "工程实现",
          skills: [
            { name: "PyTorch", level: 85 },
            { name: "Attack Reproduction", level: 84 },
            { name: "Evaluation Pipeline", level: 83 },
          ],
        },
      ],
      additional: ["学术写作", "开源实现", "跨校协作", "英文沟通"],
    },
    timeline: {
      title: "教育与经历",
      subtitle: "教育背景与研究训练经历。",
      milestones: [
        {
          year: "2025.09 - 至今",
          title: "浙江大学 · 计算机科学与技术学院 · 网络空间安全专业 · 学术型博士研究生",
          description: "主要研究方向：大模型安全；导师：郑天航；任奎。",
          type: "education",
        },
        {
          year: "2021.09 - 2024.06",
          title: "南开大学 · 网络空间安全学院 · 网络空间安全专业 · 学术型硕士研究生",
          description: "主要研究方向：自然语言处理、用户数据驱动安全、口令猜测；硕士论文题目：基于口令重用行为的定向猜测技术研究。",
          type: "education",
        },
        {
          year: "2017.09 - 2021.06",
          title: "吉林大学 · 软件学院 · 工科试验班（软件工程） · 工学学士",
          description: "本科阶段系统学习软件工程与计算机基础课程。",
          type: "education",
        },
      ],
    },
    contact: {
      title: "联系",
      subtitle: "欢迎就 LLM/MLLM 安全研究与合作联系。",
      info: [
        { label: "邮箱", value: "kedongxiu@zju.edu.cn", href: "mailto:kedongxiu@zju.edu.cn" },
        { label: "备用邮箱", value: "xkdmatt@gmail.com", href: "mailto:xkdmatt@gmail.com" },
        { label: "地点", value: "中国杭州浙江大学" },
      ],
      social: {
        title: "社交链接",
        links: [
          { label: "GitHub", href: "https://github.com/Jus1mple" },
          { label: "Google Scholar", href: "https://scholar.google.com/citations?user=yjn-6QkAAAAJ&hl=en" },
          { label: "Homepage", href: "https://jus1mple.github.io/" },
        ],
      },
    },
    footer: {
      name: "修可栋",
      bio: "浙江大学博士生，研究 LLM/MLLM 与网络空间安全。",
      resources: "学术资源",
      resourceLinks: [
        { label: "Google Scholar", href: "https://scholar.google.com/citations?user=yjn-6QkAAAAJ&hl=en" },
        { label: "GitHub", href: "https://github.com/Jus1mple" },
        { label: "Personal Website", href: "https://jus1mple.github.io/" },
      ],
      contact: "联系方式",
      address: ["Zhejiang University", "Hangzhou, Zhejiang, China", "Email: kedongxiu@zju.edu.cn"],
      copyright: "© 2026 Kedong Xiu. All rights reserved.",
    },
  },
  en: {
    skills: {
      title: "Skills",
      subtitle: "Overview of research and engineering capabilities.",
      additionalTitle: "Additional",
      categories: [
        {
          name: "Research Areas",
          skills: [
            { name: "LLM Security", level: 90 },
            { name: "MLLM Security", level: 86 },
            { name: "Password Security", level: 82 },
          ],
        },
        {
          name: "Research Capability",
          skills: [
            { name: "Paper Writing", level: 88 },
            { name: "Experiment Design", level: 87 },
            { name: "Benchmarking", level: 84 },
          ],
        },
        {
          name: "Engineering",
          skills: [
            { name: "PyTorch", level: 85 },
            { name: "Attack Reproduction", level: 84 },
            { name: "Evaluation Pipeline", level: 83 },
          ],
        },
      ],
      additional: ["Academic Writing", "Open-source Implementation", "Cross-institute Collaboration", "English Communication"],
    },
    timeline: {
      title: "Timeline",
      subtitle: "Education background and research training.",
      milestones: [
        {
          year: "2025.09 - Present",
          title: "Zhejiang University · School of Computer Science and Technology · Cyberspace Security · Academic PhD Student",
          description: "Main research focus: LLM security. Advisors: Prof. Tianhang Zheng and Prof. Kui Ren.",
          type: "education",
        },
        {
          year: "2021.09 - 2024.06",
          title: "Nankai University · College of Cyber Science · Cyberspace Security · Academic Master's Student",
          description: "Research: NLP, user data-driven security, and password guessing. Thesis: Targeted Guessing Techniques Based on Password Reuse Behavior.",
          type: "education",
        },
        {
          year: "2017.09 - 2021.06",
          title: "Jilin University · School of Software · Experimental Class (Software Engineering) · B.Eng.",
          description: "Completed foundational training in software engineering and computer science.",
          type: "education",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Feel free to reach out for LLM/MLLM security collaboration.",
      info: [
        { label: "Email", value: "kedongxiu@zju.edu.cn", href: "mailto:kedongxiu@zju.edu.cn" },
        { label: "Secondary Email", value: "xkdmatt@gmail.com", href: "mailto:xkdmatt@gmail.com" },
        { label: "Location", value: "Zhejiang University, Hangzhou, China" },
      ],
      social: {
        title: "Social Links",
        links: [
          { label: "GitHub", href: "https://github.com/Jus1mple" },
          { label: "Google Scholar", href: "https://scholar.google.com/citations?user=yjn-6QkAAAAJ&hl=en" },
          { label: "Homepage", href: "https://jus1mple.github.io/" },
        ],
      },
    },
    footer: {
      name: "Kedong Xiu",
      bio: "PhD student at Zhejiang University, working on LLM/MLLM and Cybersecurity.",
      resources: "Academic Resources",
      resourceLinks: [
        { label: "Google Scholar", href: "https://scholar.google.com/citations?user=yjn-6QkAAAAJ&hl=en" },
        { label: "GitHub", href: "https://github.com/Jus1mple" },
        { label: "Personal Website", href: "https://jus1mple.github.io/" },
      ],
      contact: "Contact Info",
      address: ["Zhejiang University", "Hangzhou, Zhejiang, China", "Email: kedongxiu@zju.edu.cn"],
      copyright: "© 2026 Kedong Xiu. All rights reserved.",
    },
  },
};
