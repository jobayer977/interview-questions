---
title: What is override in TypeScript?
source: https://www.typescriptlang.org/
---

Method Overriding is a process of overthrowing a method of super class by method of same name and parameters in sub class. Method Overriding is useful when sub class wants to modify the behavior of super class for certain tasks.

**Example WithOut Overriding**

```typescript
class Base {
 public name: string = ''
 public getName(): string {
  return `${this.name} Base`
 }
}
class Sub extends Base {
 constructor() {
  super()
  this.name = 'John'
 }
}

const sub = new Sub()
console.log(sub.getName()) // John Base
```

**Example With Overriding**

```typescript
class Base {
 public name: string = ''
 public getName(): string {
  return `${this.name} Base`
 }
}
class Sub extends Base {
 constructor() {
  super()
  this.name = 'John'
 }
 public getName(): string {
  return `${this.name} Sub`
 }
}

const sub = new Sub()
console.log(sub.getName()) // John Sub
```
