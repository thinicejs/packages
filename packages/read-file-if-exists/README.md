# @thinice/read-file-if-exists

Returns file contents or undefined (doesn't throw).

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
