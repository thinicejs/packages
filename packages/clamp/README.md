# @thinice/clamp

Clamps a number between min and max values.

## Installation

```bash
npm install @thinice/clamp
```

## Usage

```typescript
import { clamp } from "@thinice/clamp";

clamp(5, 0, 10); // 5
clamp(15, 0, 10); // 10
clamp(-5, 0, 10); // 0
clamp(7.5, 0, 10); // 7.5
```

## Errors

Throws if `min > max`:

```typescript
clamp(5, 10, 0); // Error: min must be less than or equal to max
```

Throws if any argument is `NaN`:

```typescript
clamp(NaN, 0, 10); // Error: clamp arguments must not be NaN
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/clamp
