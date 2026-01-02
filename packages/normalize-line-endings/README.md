# @thinice/normalize-line-endings

Converts CRLF ↔ LF line endings.

## Installation

```bash
npm install @thinice/normalize-line-endings
```

## Usage

```typescript
import { normalizeLineEndings } from "@thinice/normalize-line-endings";

normalizeLineEndings("hello\r\nworld", "lf");    // "hello\nworld"
normalizeLineEndings("hello\nworld", "crlf");    // "hello\r\nworld"
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/normalize-line-endings
