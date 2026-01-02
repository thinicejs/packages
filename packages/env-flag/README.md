# @thinice/env-flag

Reads process.env.FLAG and coerces to boolean.

## Installation

```bash
npm install @thinice/env-flag
```

## Usage

```typescript
import { envFlag } from "@thinice/env-flag";

envFlag("DEBUG");              // true if DEBUG is set and not "0"/"false"
envFlag("DEBUG", false);       // false if DEBUG is unset
envFlag("ENABLED", true);      // true if ENABLED is unset
```
