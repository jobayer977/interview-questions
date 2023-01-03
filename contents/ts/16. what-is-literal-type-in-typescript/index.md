---
title: What is literal type in typescript
source: https://www.typescriptlang.org/
---
TypeScript Literal Types restrict the value of a variable to finite valid values. This is in contrast to the variable which allows you to change value (except for TypeScript Constants). The latest version of Typescript supports the String Literal Types, Numeric Literal Types, Boolean Literal Types & Enum Literal Types.

**Example**

```typescript
type Easing = "ease-in" | "ease-out" | "ease-in-out";
```

```typescript
interface ValidationSuccess {
  isValid: true;
  reason: null;
}
interface ValidationFailure {
  isValid: false;
  reason: string;
}
type ValidationResult = ValidationSuccess | ValidationFailure;
```
