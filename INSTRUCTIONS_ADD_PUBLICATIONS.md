# 论文新增维护说明（Instruction）

本文档用于规范“新增论文到主页”的提交流程。  
你后续只需按这里的格式发我，我会自动完成代码填充、页面接入与构建检查。

## 1. 你需要提供的内容

每次新增论文，请按 **JSON 数组** 提交（即使只有 1 篇，也放在数组里）。

```json
[
  {
    "id": "pub-5",
    "year": 2026,
    "type": "conference",
    "title_en": "Paper Title in English",
    "title_zh": "中文标题（可选）",
    "authors_en": "Author A, Author B*, Author C",
    "authors_zh": "作者A, 作者B*, 作者C（可选）",
    "venue_en": "USENIX Security 2026",
    "venue_zh": "USENIX Security 2026（可选）",
    "pdf": "https://arxiv.org/abs/xxxx.xxxxx",
    "code": "https://github.com/xxx/xxx",
    "summary_en": "2-4 sentences for quick overview.",
    "summary_zh": "2-4句中文简介。",
    "method_image_filename": "pub-5-method.png",
    "method_image_alt_en": "Method overview of Paper Title",
    "method_image_alt_zh": "论文方法图概览",
    "bibtex": "@inproceedings{...Google Scholar导出的BibTeX...（可选）"
  }
]
```

## 2. 字段约束

### 必填字段

- `id`：唯一 ID，建议按顺序 `pub-5`、`pub-6` ...
- `year`：论文年份（整数）
- `type`：`conference` / `journal` / `preprint`
- `title_en`
- `authors_en`
- `venue_en`
- `pdf`
- `summary_en`

`venue_en` / `venue_zh` 请只填写实际来源（如 `arXiv`、`NDSS 2026`、`USENIX Security 2024`），不要加 `Under Review` / `在审` 之类描述。

### 建议填写字段

- `code`：没有代码请填 `"#"`
- `summary_zh`：不填可暂用英文占位
- `authors_zh`、`venue_zh`、`title_zh`
- `method_image_filename`
- `method_image_alt_en`、`method_image_alt_zh`
- `bibtex`：建议粘贴 Google Scholar 导出的 BibTeX（有则优先使用；不填则自动生成）

## 3. 方法图提交规则

方法图请放在：

- `public/images/papers/`

文件命名建议：

- `pub-5-method.png`
- `pub-6-method.png`

代码中会引用为：

- `/images/papers/pub-5-method.png`

> 注意：不要手动改 `dist/` 下的文件。`dist` 是构建产物，会被覆盖。

## 4. 我会自动完成的事项

收到你的 JSON 后，我会自动：

1. 同步更新中英文论文数据（`src/data/content/publications.js`）
2. 接入论文列表卡片内容（标题/作者/venue/PDF/Code）
3. 接入展开区简介与方法图
4. 保持“PDF/Code 同行，快速浏览下一行，三角展开交互”一致
5. 处理无 code、无图片的占位逻辑
6. 默认按年份倒序（必要时保持你指定顺序）
7. 运行 `npm run build` 验证页面可构建

## 5. 你每次新增论文的最小流程

1. 准备论文 JSON（按本文档模板）
2. 把方法图放到 `public/images/papers/`（可后补）
3. 把 JSON 发给我
4. 我来完成自动填充并回传变更说明

## 6. 常见错误与避免方法

- `id` 重复：请确保新论文 ID 不与旧论文冲突
- `type` 写错：只能是 `conference` / `journal` / `preprint`
- `pdf` 为空：会导致按钮不可用
- 图片路径写成本地绝对路径：请只给文件名，我会转成站点路径
- 直接改 `dist`：无效，发布前会重新构建覆盖

## 7. 快速提交示例（可直接复制）

```json
[
  {
    "id": "pub-5",
    "year": 2026,
    "type": "preprint",
    "title_en": "Example Paper Title",
    "title_zh": "示例论文标题",
    "authors_en": "Alice, Bob*, Kedong Xiu",
    "authors_zh": "Alice, Bob*, 修可栋",
    "venue_en": "arXiv",
    "venue_zh": "arXiv",
    "pdf": "https://arxiv.org/abs/2601.00001",
    "code": "#",
    "summary_en": "This work proposes ... and achieves ...",
    "summary_zh": "该工作提出...并实现了...",
    "method_image_filename": "pub-5-method.png",
    "method_image_alt_en": "Example method overview",
    "method_image_alt_zh": "示例方法图概览"
  }
]
```
