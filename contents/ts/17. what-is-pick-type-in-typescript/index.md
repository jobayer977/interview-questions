---
title: What is Pick type in TypeScript?
source: https://www.typescriptlang.org/
---
Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Pick<Todo, "title" | "completed">;
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  description:'ddd' // Type '{ title: string; completed: false; description: string; }' is not assignable to type 'Pick<Todo, "title" | "completed">'.
};
```
