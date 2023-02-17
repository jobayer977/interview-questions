---
title: What is useExisting in Angular?
source: https://angular.io
---

The useExisting provider key lets you map one token to another. In effect, the first token is an alias for the service associated with the second token, creating two ways to access the same service object.

## Example

```typescript
;[
	NewLogger,
	// Alias OldLogger w/ reference to NewLogger
	{ provide: OldLogger, useExisting: NewLogger },
]
```
