# @thinice/is-ci

Detects if running in a CI environment.

## Installation

```bash
npm install @thinice/is-ci
```

## Usage

```typescript
import { isCi } from "@thinice/is-ci";

if (isCi()) {
  // Running in CI
}
```

## Supported CI Systems

Detects: GitHub Actions, GitLab CI, CircleCI, Jenkins, Travis CI, AppVeyor, TeamCity, and any system setting `CI` or `CONTINUOUS_INTEGRATION`.

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-ci
