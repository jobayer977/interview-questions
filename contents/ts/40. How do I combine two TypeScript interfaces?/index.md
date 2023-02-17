---
title: How do I combine two TypeScript interfaces?
source: https://www.typescriptlang.org/
---

To merge two interfaces with TypeScript, we can use extends to extend multiple interfaces. to create the IFooBar that extends IFoo and IBar . This means IFooBar has all the members from both interfaces inside.

**Example**

```typescript
interface IFoo {
    foo(): void;
}
interface IBar {
    bar(): void;
}

interface IFooBar extends IFoo, IBar {
}
```
