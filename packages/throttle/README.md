# @thinice/throttle

Throttle a function - executes at most once per interval.

## Installation

```bash
npm install @thinice/throttle
```

## Usage

```typescript
import { throttle } from "@thinice/throttle";

const onScroll = throttle(() => {
  console.log("scroll position:", window.scrollY);
}, 100);

window.addEventListener("scroll", onScroll);
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/throttle
