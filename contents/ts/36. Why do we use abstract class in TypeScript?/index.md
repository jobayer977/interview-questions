---
title: Why do we use abstract class in TypeScript?
source: https://www.typescriptlang.org/
---

Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members. The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.

```ts
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earth...');
    }
}
 

class Dog extends Animal {
    makeSound(): void {
        console.log('woof');
    }
}
```
