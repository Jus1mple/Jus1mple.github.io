# Open-source projects data

Each open-source project lives in its own file under `items/`.

## Add a new project

1. Copy an existing file in `items/` (e.g. `dualbreach.js`)
2. Rename it to something meaningful (e.g. `my-tool.js`)
3. Update the exported `project` object
4. Export it from `items/index.js`

## Fields

- `id`: unique stable id (used for keys)
- `name`: project name
- `type`: a short label (e.g. "Research Code")
- `description`: one-paragraph description
- `stack`: string[]
- `github`: string (optional)
- `demo`: string (optional)
- `highlights`: string[]

Both `zh` and `en` are supported.
