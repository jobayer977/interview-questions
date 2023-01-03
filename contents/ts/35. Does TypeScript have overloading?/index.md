---
title: Does TypeScript have overloading?
source: https://www.typescriptlang.org/
---

TypeScript provides the concept of function overloading. You can have multiple functions with the same name but different parameter types and return type. However, the number of parameters should be the same.

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

add(1, 2); // 3

add("1", "2"); // "12"

add(1, "2"); // "12"
```
