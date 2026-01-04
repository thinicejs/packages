# @thinice/read-file-if-exists

Returns file contents or undefined if file doesn't exist.

## Installation

```bash
npm install @thinice/read-file-if-exists
```

## Usage

```typescript
import { readFileIfExists } from "@thinice/read-file-if-exists";

const content = await readFileIfExists("./config.json"); // string | undefined
const data = await readFileIfExists("./data.txt", "utf8");
```

Only returns `undefined` for missing files (`ENOENT`). Other errors (permission denied, disk failure, path is directory) are thrown.

## Source
https://github.com/thinicejs/utils/tree/main/packages/read-file-if-exists
