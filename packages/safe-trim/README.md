# @thinice/safe-trim

Trims only if input is a string, otherwise returns input.

## Installation

```bash
npm install @thinice/safe-trim
```

## Usage

```typescript
import { safeTrim } from "@thinice/safe-trim";

safeTrim("  hello  ");  // "hello"
safeTrim(42);          // 42
safeTrim(null);        // null
```
