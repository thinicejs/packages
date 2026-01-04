# @thinice/is-node

Detects if running in Node.js (checks `process.versions.node`).

## Installation

```bash
npm install @thinice/is-node
```

## Usage

```typescript
import { isNode } from "@thinice/is-node";

if (isNode()) {
  // Node.js or Bun
} else {
  // Browser, Deno, Cloudflare Workers, etc.
}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-node
