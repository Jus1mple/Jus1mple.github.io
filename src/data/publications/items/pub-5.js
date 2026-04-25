export const publication = {
  id: "pub-5",
  zh: {
    id: "pub-5",
    title: "Dynamic Target Attack",
    authors:
      "Kedong Xiu, Churui Zeng, Tianhang Zheng, Xinzhe Huang, Xiaojun Jia, Di Wang, Puning Zhao, Zhan Qin, Kui Ren",
    venue: "arXiv",
    year: 2025,
    citations: 0,
    type: "preprint",
    pdf: "https://arxiv.org/abs/2510.02422",
    code: "https://github.com/AIsec-ke/Dynamic-Target-Attack",
    bibtex: `@article{xiu2025dynamic,
  title={Dynamic Target Attack},
  author={Kedong Xiu and Churui Zeng and Tianhang Zheng and Xinzhe Huang and Xiaojun Jia and Di Wang and Puning Zhao and Zhan Qin and Kui Ren},
  journal={arXiv preprint arXiv:2510.02422},
  year={2025},
  url={https://arxiv.org/abs/2510.02422}
}`,
    overview: {
      summary:
        "Dynamic Target Attack（DTA）是一种面向安全对齐大模型的越狱攻击框架，不再优化到固定且低概率的目标响应。DTA 在每轮中从目标模型输出分布采样多个候选响应，选择其中最具危害性的响应作为临时优化目标，并迭代更新对抗后缀。该动态目标机制有效降低了目标与模型输出分布的不匹配，在白盒与黑盒场景下均表现出更高的攻击效果与效率。",
      methodImage: "/images/papers/pub-5-method.png",
      methodImageAlt: "Dynamic Target Attack 方法概览图",
    },
  },
  en: {
    id: "pub-5",
    title: "Dynamic Target Attack",
    authors:
      "Kedong Xiu, Churui Zeng, Tianhang Zheng, Xinzhe Huang, Xiaojun Jia, Di Wang, Puning Zhao, Zhan Qin, Kui Ren",
    venue: "arXiv",
    year: 2025,
    citations: 0,
    type: "preprint",
    pdf: "https://arxiv.org/abs/2510.02422",
    code: "https://github.com/AIsec-ke/Dynamic-Target-Attack",
    bibtex: `@article{xiu2025dynamic,
  title={Dynamic Target Attack},
  author={Kedong Xiu and Churui Zeng and Tianhang Zheng and Xinzhe Huang and Xiaojun Jia and Di Wang and Puning Zhao and Zhan Qin and Kui Ren},
  journal={arXiv preprint arXiv:2510.02422},
  year={2025},
  url={https://arxiv.org/abs/2510.02422}
}`,
    overview: {
      summary:
        "Dynamic Target Attack (DTA) is a jailbreak framework that avoids optimizing toward a fixed low-probability target response. In each round, it samples multiple candidate responses from the target model's output distribution, selects the most harmful one as a temporary optimization target, and iteratively updates the adversarial suffix. This adaptive target selection reduces target-distribution mismatch and improves both attack effectiveness and optimization efficiency in white-box and black-box settings.",
      methodImage: "/images/papers/pub-5-method.png",
      methodImageAlt: "Dynamic Target Attack method overview",
    },
  },
};

