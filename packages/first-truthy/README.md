# @thinice/first-truthy

Returns the first truthy value in an array.

## Installation

```bash
npm install @thinice/first-truthy
```

## Usage

```typescript
import { firstTruthy } from "@thinice/first-truthy";

firstTruthy([0, "", null, "foo"]); // "foo"
firstTruthy([false, true, false]); // true
firstTruthy([0, "", null]); // undefined
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/first-truthy
