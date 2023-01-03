---
title:  What is Unions in typescript?
source: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#next-steps
---

Unions are a way to combine multiple types into a single type.

**Variable Example**

```typescript
let isDone: boolean | number = false
```

**Function Example**

```typescript
function add(x: number, y: number): number | boolean {
 return x + y
}
```
