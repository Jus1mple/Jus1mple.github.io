export const publication = {
  id: "pub-2",
  zh: {
    id: "pub-2",
    title:
      "CapRecover: A Cross-Modality Feature Inversion Attack Framework on Vision Language Models",
    authors: "Kedong Xiu, Sai Qian Zhang*",
    venue: "ACM Multimedia (MM) 2025",
    year: 2025,
    citations: 0,
    type: "conference",
    pdf: "https://arxiv.org/abs/2507.22828",
    code: "https://github.com/Jus1mple/Image2CaptionAttack",
    bibtex: `@inproceedings{xiu2025caprecover,
  title={CapRecover: A Cross-Modality Feature Inversion Attack Framework on Vision Language Models},
  author={Kedong Xiu and Sai Qian Zhang},
  booktitle={Proceedings of the 33rd ACM International Conference on Multimedia (MM '25)},
  year={2025},
  doi={10.1145/3746027.3755203},
  url={https://doi.org/10.1145/3746027.3755203}
}`,
    overview: {
      summary:
        "CapRecover 提出跨模态特征反演框架，研究视觉语言模型中的隐私泄露风险，并验证攻击有效性与可扩展性。",
      methodImage: "/images/papers/pub-2-method.png",
      methodImageAlt: "CapRecover framework overview",
    },
    detailsCss: `
.paper-details { --card: #ffffff; --muted: #6b7280; --border: #e5e7eb; }
.paper-details h2 { font-size: 1.125rem; font-weight: 650; margin: 1.35rem 0 0.65rem; }
.paper-details h3 { font-size: 1rem; font-weight: 600; margin: 1.1rem 0 0.55rem; color: #111827; }
.paper-details p { margin: 0.55rem 0; line-height: 1.8; color: #374151; }
.paper-details a { color: #1d4ed8; text-decoration: none; }
.paper-details a:hover { text-decoration: underline; }
.paper-details .hero { border: 1px solid var(--border); background: #f9fafb; padding: 14px 16px; }
.paper-details .hero .kicker { font-size: 12px; color: var(--muted); margin-bottom: 6px; }
.paper-details .pill-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
.paper-details .pill { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--border); background: var(--card); padding: 8px 10px; font-size: 13px; color: #111827; }
.paper-details .pill .dot { width: 8px; height: 8px; border-radius: 999px; background: #93c5fd; }
.paper-details .grid2 { display: grid; grid-template-columns: 1fr; gap: 12px; margin-top: 10px; }
@media (min-width: 768px) { .paper-details .grid2 { grid-template-columns: 1fr 1fr; } }
.paper-details .card { border: 1px solid var(--border); background: var(--card); padding: 14px 16px; }
.paper-details .callout { border: 1px solid var(--border); background: #f8fafc; padding: 12px 14px; }
.paper-details ul { margin: 8px 0 0; padding-left: 18px; color: #374151; }
.paper-details li { margin: 6px 0; }
.paper-details figure { margin: 10px 0; }
.paper-details figcaption { margin-top: 6px; font-size: 12px; color: var(--muted); }
.paper-details img { width: 100%; max-width: 100%; border: 1px solid var(--border); background: #fff; }
.paper-details table { width: 100%; border-collapse: collapse; margin-top: 10px; }
.paper-details th, .paper-details td { border: 1px solid var(--border); padding: 10px 10px; font-size: 13px; }
.paper-details th { background: #f9fafb; text-align: left; color: #111827; }
.paper-details code { background: #f3f4f6; padding: 0.12rem 0.28rem; border-radius: 0.25rem; }
.paper-details pre { border: 1px solid var(--border); background: #0b1020; color: #e5e7eb; padding: 12px 14px; overflow: auto; }
.paper-details pre code { background: transparent; padding: 0; color: inherit; }
`,
    detailsHtml: `
<div class="hero">
  <div class="kicker">ACM Multimedia 2025 · Paper Overview (HTML sample)</div>
  <p>
    In modern <em>split deployment</em> AI apps, the vision encoder runs on-device and only intermediate features are sent to the cloud.
    While efficient, this paradigm introduces severe privacy risks.
  </p>
  <div class="pill-row">
    <span class="pill"><span class="dot"></span><strong>Task</strong> semantic recovery from intermediate features</span>
    <span class="pill"><span class="dot"></span><strong>Setting</strong> cross-modality feature inversion</span>
    <span class="pill"><span class="dot"></span><strong>Key formula</strong> $\\min_{x} \\lVert f_{\\text{img}}(x) - z \\rVert_2^2$</span>
  </div>
</div>

<h2>Abstract</h2>
<p>
  Previous attacks mostly focused on image reconstruction with limited success.
  We ask a different question: can we bypass image reconstruction and directly recover high-level semantics (captions / labels) from intermediate features?
  We propose <strong>CAPRECOVER</strong>, a general cross-modality feature inversion framework for direct semantic recovery.
</p>

<h2>Core Contributions</h2>
<div class="grid2">
  <div class="card">
    <h3>A Novel Attack Framework</h3>
    <p>
      We propose CAPRECOVER, the first general cross-modality feature inversion framework that directly recovers semantics without image reconstruction.
    </p>
  </div>
  <div class="card">
    <h3>Comprehensive Evaluation</h3>
    <p>
      We validate the attack across datasets and models and observe a strong correlation between semantic leakage and network depth.
    </p>
  </div>
  <div class="card">
    <h3>An Efficient Defense</h3>
    <p>
      A simple, training-free noise-based defense can be deployed on edge devices with zero communication overhead.
    </p>
  </div>
  <div class="card">
    <h3>What to take away</h3>
    <ul>
      <li>Deeper features leak more semantics.</li>
      <li>Recovering captions/labels can be easier than reconstructing pixels.</li>
      <li>Lightweight defense can substantially reduce leakage.</li>
    </ul>
  </div>
</div>

<h2>Method</h2>
<p>
  CAPRECOVER contains three modules: (i) feature projection, (ii) feature-text alignment (Q-Former), and (iii) description generation (frozen LLM).
</p>
<figure>
  <img src="/images/papers/pub-2-method.png" alt="CAPRECOVER framework diagram" />
  <figcaption>Figure: The CAPRECOVER framework comprises three core modules.</figcaption>
</figure>

<h2>Key Results</h2>
<h3>Caption Reconstruction: Leakage vs. Depth</h3>
<p>
  Semantic leakage is strongly correlated with network depth. A toy trend can be expressed as:
  $$\\text{Leakage}(\\text{depth}) \\uparrow \\quad\\Rightarrow\\quad \\text{Quality}(\\text{caption}) \\uparrow.$$
</p>

<div class="callout">
  <strong>Table 1.</strong> Semantic recovery performance from different ResNet50 layers (COCO2017)
  <table>
    <thead>
      <tr>
        <th>Middle Layer</th>
        <th>BLEU-1</th>
        <th>CIDEr</th>
        <th>Cosine Similarity</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>layer1</td><td>0.24</td><td>0.19</td><td>0.00%</td></tr>
      <tr><td>layer2</td><td>0.51</td><td>0.31</td><td>43.76%</td></tr>
      <tr><td>layer3</td><td>0.58</td><td>0.55</td><td>31.42%</td></tr>
      <tr><td>layer4</td><td>0.62</td><td>0.68</td><td>85.64%</td></tr>
      <tr><td>base (final layer)</td><td>0.70</td><td>0.90</td><td>90.52%</td></tr>
    </tbody>
  </table>
</div>

<h3>Label Reconstruction: High-Fidelity Recovery</h3>
<p>
  When attacking a CLIP ViT model, we can reach high Top-1 accuracy on CIFAR-10 (example number: <strong>92.71%</strong>).
</p>

<h2>How to Defend?</h2>
<p>
  Inject random noise into features on the client-side, and subtract it before the next computation:
  $$F^{(i+1)} = g\\big((F^{(i)} + \\epsilon^{(i)}) - \\epsilon^{(i)}\\big) = g(F^{(i)}).$$
</p>
<p>
  This method is training-free and can be deployed on edge devices.
</p>

<div class="callout">
  <strong>Table 2.</strong> Attack performance (BLEU-1) on ResNet50 w/ and w/o noise (COCO2017)
  <table>
    <thead>
      <tr>
        <th>Defense Status</th>
        <th>layer1</th>
        <th>layer2</th>
        <th>layer3</th>
        <th>layer4</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Without Noise</strong></td><td>0.24</td><td>0.51</td><td>0.58</td><td>0.62</td></tr>
      <tr><td><strong>With Noise</strong></td><td>0.49</td><td>0.03</td><td>0.02</td><td>0.05</td></tr>
    </tbody>
  </table>
</div>

<h2>Citation</h2>
<p>
  你可以继续用上面的 “Cite” 按钮复制 BibTeX。这里也给一个页面内示例：
</p>
<pre><code>@inproceedings{xiu2025caprecover,
  title     = {CAPRECOVER: A Cross-Modality Feature Inversion Attack Framework on Vision Language Models},
  author    = {Kedong Xiu and Sai Qian Zhang},
  booktitle = {Proceedings of the 33rd ACM International Conference on Multimedia (MM)},
  year      = {2025}
}</code></pre>
`,
  },
  en: {
    id: "pub-2",
    title:
      "CapRecover: A Cross-Modality Feature Inversion Attack Framework on Vision Language Models",
    authors: "Kedong Xiu, Sai Qian Zhang*",
    venue: "ACM Multimedia (MM)",
    year: 2025,
    citations: 0,
    type: "conference",
    pdf: "https://arxiv.org/abs/2507.22828",
    code: "https://github.com/Jus1mple/Image2CaptionAttack",
    bibtex: `@inproceedings{xiu2025caprecover,
  title={CapRecover: A Cross-Modality Feature Inversion Attack Framework on Vision Language Models},
  author={Kedong Xiu and Sai Qian Zhang},
  booktitle={Proceedings of the 33rd ACM International Conference on Multimedia (MM '25)},
  year={2025},
  doi={10.1145/3746027.3755203},
  url={https://doi.org/10.1145/3746027.3755203}
}`,
    overview: {
      summary:
        "CapRecover introduces a cross-modality feature inversion framework to expose privacy leakage risks in vision-language models.",
      methodImage: "/images/papers/pub-2-method.png",
      methodImageAlt: "CapRecover framework overview",
    },
    detailsCss: `
.paper-details { --card: #ffffff; --muted: #6b7280; --border: #e5e7eb; }
.paper-details h2 { font-size: 1.125rem; font-weight: 650; margin: 1.35rem 0 0.65rem; }
.paper-details h3 { font-size: 1rem; font-weight: 600; margin: 1.1rem 0 0.55rem; color: #111827; }
.paper-details p { margin: 0.55rem 0; line-height: 1.8; color: #374151; }
.paper-details a { color: #1d4ed8; text-decoration: none; }
.paper-details a:hover { text-decoration: underline; }
.paper-details .hero { border: 1px solid var(--border); background: #f9fafb; padding: 14px 16px; }
.paper-details .hero .kicker { font-size: 12px; color: var(--muted); margin-bottom: 6px; }
.paper-details .pill-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
.paper-details .pill { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--border); background: var(--card); padding: 8px 10px; font-size: 13px; color: #111827; }
.paper-details .pill .dot { width: 8px; height: 8px; border-radius: 999px; background: #93c5fd; }
.paper-details .grid2 { display: grid; grid-template-columns: 1fr; gap: 12px; margin-top: 10px; }
@media (min-width: 768px) { .paper-details .grid2 { grid-template-columns: 1fr 1fr; } }
.paper-details .card { border: 1px solid var(--border); background: var(--card); padding: 14px 16px; }
.paper-details .callout { border: 1px solid var(--border); background: #f8fafc; padding: 12px 14px; }
.paper-details ul { margin: 8px 0 0; padding-left: 18px; color: #374151; }
.paper-details li { margin: 6px 0; }
.paper-details figure { margin: 10px 0; }
.paper-details figcaption { margin-top: 6px; font-size: 12px; color: var(--muted); }
.paper-details img { width: 100%; max-width: 100%; border: 1px solid var(--border); background: #fff; }
.paper-details table { width: 100%; border-collapse: collapse; margin-top: 10px; }
.paper-details th, .paper-details td { border: 1px solid var(--border); padding: 10px 10px; font-size: 13px; }
.paper-details th { background: #f9fafb; text-align: left; color: #111827; }
.paper-details code { background: #f3f4f6; padding: 0.12rem 0.28rem; border-radius: 0.25rem; }
.paper-details pre { border: 1px solid var(--border); background: #0b1020; color: #e5e7eb; padding: 12px 14px; overflow: auto; }
.paper-details pre code { background: transparent; padding: 0; color: inherit; }
`,
    detailsHtml: `
<div class="hero">
  <div class="kicker">ACM Multimedia 2025 · Paper Overview (HTML sample)</div>
  <p>
    In modern <em>split deployment</em> AI apps, the vision encoder runs on-device and only intermediate features are sent to the cloud.
    While efficient, this paradigm introduces severe privacy risks.
  </p>
  <div class="pill-row">
    <span class="pill"><span class="dot"></span><strong>Task</strong> semantic recovery from intermediate features</span>
    <span class="pill"><span class="dot"></span><strong>Setting</strong> cross-modality feature inversion</span>
    <span class="pill"><span class="dot"></span><strong>Key formula</strong> $\\min_{x} \\lVert f_{\\text{img}}(x) - z \\rVert_2^2$</span>
  </div>
</div>

<h2>Abstract</h2>
<p>
  Previous attacks mostly focused on image reconstruction with limited success.
  We ask a different question: can we bypass image reconstruction and directly recover high-level semantics (captions / labels) from intermediate features?
  We propose <strong>CAPRECOVER</strong>, a general cross-modality feature inversion framework for direct semantic recovery.
</p>

<h2>Core Contributions</h2>
<div class="grid2">
  <div class="card">
    <h3>A Novel Attack Framework</h3>
    <p>
      We propose CAPRECOVER, the first general cross-modality feature inversion framework that directly recovers semantics without image reconstruction.
    </p>
  </div>
  <div class="card">
    <h3>Comprehensive Evaluation</h3>
    <p>
      We validate the attack across datasets and models and observe a strong correlation between semantic leakage and network depth.
    </p>
  </div>
  <div class="card">
    <h3>An Efficient Defense</h3>
    <p>
      A simple, training-free noise-based defense can be deployed on edge devices with zero communication overhead.
    </p>
  </div>
  <div class="card">
    <h3>What to take away</h3>
    <ul>
      <li>Deeper features leak more semantics.</li>
      <li>Recovering captions/labels can be easier than reconstructing pixels.</li>
      <li>Lightweight defense can substantially reduce leakage.</li>
    </ul>
  </div>
</div>

<h2>Method</h2>
<p>
  CAPRECOVER contains three modules: (i) feature projection, (ii) feature-text alignment (Q-Former), and (iii) description generation (frozen LLM).
</p>
<figure>
  <img src="/images/papers/pub-2-method.png" alt="CAPRECOVER framework diagram" />
  <figcaption>Figure: The CAPRECOVER framework comprises three core modules.</figcaption>
</figure>

<h2>Key Results</h2>
<h3>Caption Reconstruction: Leakage vs. Depth</h3>
<p>
  Semantic leakage is strongly correlated with network depth. A toy trend can be expressed as:
  $$\\text{Leakage}(\\text{depth}) \\uparrow \\quad\\Rightarrow\\quad \\text{Quality}(\\text{caption}) \\uparrow.$$
</p>

<div class="callout">
  <strong>Table 1.</strong> Semantic recovery performance from different ResNet50 layers (COCO2017)
  <table>
    <thead>
      <tr>
        <th>Middle Layer</th>
        <th>BLEU-1</th>
        <th>CIDEr</th>
        <th>Cosine Similarity</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>layer1</td><td>0.24</td><td>0.19</td><td>0.00%</td></tr>
      <tr><td>layer2</td><td>0.51</td><td>0.31</td><td>43.76%</td></tr>
      <tr><td>layer3</td><td>0.58</td><td>0.55</td><td>31.42%</td></tr>
      <tr><td>layer4</td><td>0.62</td><td>0.68</td><td>85.64%</td></tr>
      <tr><td>base (final layer)</td><td>0.70</td><td>0.90</td><td>90.52%</td></tr>
    </tbody>
  </table>
</div>

<h3>Label Reconstruction: High-Fidelity Recovery</h3>
<p>
  When attacking a CLIP ViT model, we can reach high Top-1 accuracy on CIFAR-10 (example number: <strong>92.71%</strong>).
</p>

<h2>How to Defend?</h2>
<p>
  Inject random noise into features on the client-side, and subtract it before the next computation:
  $$F^{(i+1)} = g\\big((F^{(i)} + \\epsilon^{(i)}) - \\epsilon^{(i)}\\big) = g(F^{(i)}).$$
</p>
<p>
  This method is training-free and can be deployed on edge devices.
</p>

<div class="callout">
  <strong>Table 2.</strong> Attack performance (BLEU-1) on ResNet50 w/ and w/o noise (COCO2017)
  <table>
    <thead>
      <tr>
        <th>Defense Status</th>
        <th>layer1</th>
        <th>layer2</th>
        <th>layer3</th>
        <th>layer4</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Without Noise</strong></td><td>0.24</td><td>0.51</td><td>0.58</td><td>0.62</td></tr>
      <tr><td><strong>With Noise</strong></td><td>0.49</td><td>0.03</td><td>0.02</td><td>0.05</td></tr>
    </tbody>
  </table>
</div>
`,
  },
};

