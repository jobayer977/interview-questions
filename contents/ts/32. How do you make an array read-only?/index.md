---
title: How do you make an array read-only?
source: https://www.typescriptlang.org/
---
Using the typescript utility. The `ReadonlyArray<T>` type is a read-only array type. It is a subtype of the `Array<T>` type. This type is useful when you want to ensure that the array is read-only.

**Example**

```typescript
const arr: ReadonlyArray<number> = [1, 2, 3];
arr[0] = 4; // Error!
arr.push(4); // Error!
arr.length = 0; // Error!
arr.splice(0, 1); // Error!
```
