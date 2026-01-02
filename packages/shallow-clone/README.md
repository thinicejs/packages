# @thinice/shallow-clone

Shallow clone using spread operator, safer for old targets.

## Installation

```bash
npm install @thinice/shallow-clone
```

## Usage

```typescript
import { shallowClone } from "@thinice/shallow-clone";

shallowClone({ a: 1, b: 2 });  // { a: 1, b: 2 } (new object)
shallowClone([1, 2, 3]);       // [1, 2, 3] (new array)
shallowClone(42);              // 42 (primitives unchanged)
```
