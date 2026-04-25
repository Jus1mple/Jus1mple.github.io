# Publications data

Each publication lives in its own file under `items/`.

## Add a new publication

1. Copy an existing file in `items/` (e.g. `pub-1.js`)
2. Rename it (e.g. `pub-6.js`) and update the `id`
3. Fill in `zh` / `en` fields
4. Export it from `items/index.js`

## Paper fields (per language)

- `id`
- `title`
- `authors`
- `venue`
- `year`
- `citations` (number)
- `type` (`conference` / `journal` / `preprint`)
- `pdf`
- `code`
- `bibtex` (string, recommended: Google Scholar BibTeX)
- `overview.summary`
- `overview.methodImage`
- `overview.methodImageAlt`
