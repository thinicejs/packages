# @thinice/ensure-dir-exists

Creates a directory if missing (creates parent directories as needed).

## Installation

```bash
npm install @thinice/ensure-dir-exists
```

## Usage

```typescript
import { ensureDirExists } from "@thinice/ensure-dir-exists";

await ensureDirExists("./logs"); // Creates if missing, no-op if exists
await ensureDirExists("./a/b/c"); // Creates nested directories
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/ensure-dir-exists
