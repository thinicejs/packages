# @thinice/env-flag

Reads process.env.FLAG and coerces to boolean.

## Installation

```bash
npm install @thinice/env-flag
```

## Usage

```typescript
import { envFlag } from "@thinice/env-flag";

envFlag("DEBUG"); // true if set and truthy
envFlag("DEBUG", true); // default if unset
```

Returns `false` for: `""`, `"0"`, `"false"` (case-insensitive).

Returns `true` for any other value: `"1"`, `"true"`, `"yes"`, etc.

## Source
https://github.com/thinicejs/utils/tree/main/packages/env-flag
