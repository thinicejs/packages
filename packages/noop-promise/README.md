# @thinice/noop-promise

Returns Promise.resolve() — useful for optional hooks.

## Installation

```bash
npm install @thinice/noop-promise
```

## Usage

```typescript
import { noopPromise } from "@thinice/noop-promise";

await noopPromise(); // Resolves immediately
const hook = optionalHook || noopPromise;
await hook();
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/noop-promise
