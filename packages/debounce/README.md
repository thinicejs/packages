# @thinice/debounce

Debounce a function - only executes after delay with no calls.

## Installation

```bash
npm install @thinice/debounce
```

## Usage

```typescript
import { debounce } from "@thinice/debounce";

const search = debounce((query: string) => {
  fetch(`/api/search?q=${query}`);
}, 300);

search("hello"); // executes after 300ms of no calls
search("hello world"); // resets timer, only this one executes
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/debounce
