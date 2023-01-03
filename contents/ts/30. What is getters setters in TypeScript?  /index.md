---
title: What is getters setters in TypeScript?  
source: https://www.typescriptlang.org/
---

TypeScript has getters and setters. Getters and setters as a way of intercepting and modifying the value of a property. This gives us the ability to do things like enforce data types, or to make sure that a property is never null.

**Example**

```typescript
class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        this._fullName = newName;
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
employee.fullName; // "Bob Smith"
```
