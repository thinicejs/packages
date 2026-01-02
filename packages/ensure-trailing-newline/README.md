# @thinice/ensure-trailing-newline

Adds \n at EOF if missing.

## Installation

```bash
npm install @thinice/ensure-trailing-newline
```

## Usage

```typescript
import { ensureTrailingNewline } from "@thinice/ensure-trailing-newline";

ensureTrailingNewline("hello");     // "hello\n"
ensureTrailingNewline("hello\n");   // "hello\n"
```
