# @thinice/ensure-dir-exists

Creates a directory if missing (no recursion drama).

## Installation

```bash
npm install @thinice/ensure-dir-exists
```

## Usage

```typescript
import { ensureDirExists } from "@thinice/ensure-dir-exists";

await ensureDirExists("./logs"); // Creates if missing, no-op if exists
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/ensure-dir-exists
