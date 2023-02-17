---
title: What is public and private in TypeScript?
source: https://www.typescriptlang.org/
---

Typescript provide us three access modifiers: public, private and protected.

**Public**
The public access modifier is used to declare a property or method as public. It is the default access modifier.

```typescript
class Employee {
    public name: string;
    public getName(): string {
        return this.name;
    }
}
const emp = new Employee();
emp.name = 'John'; 
console.log(emp.getName()); // John
```

**Private**
The private access modifier is used to declare a property or method as private. It is used to hide the property or method from outside the class.

```typescript
class Employee {
    private name: string;
    private getName(): string {
        return this.name;
    }
}
const emp = new Employee();
emp.name = 'John';
console.log(emp.getName()); // Error: Property 'getName' is private and only accessible within class 'Employee'.
```

**Protected**
The protected access modifier is used to declare a property or method as protected. It is used to hide the property or method from outside the class and its subclasses.

```typescript
class Employee {
    protected name: string;
    protected getName(): string {
        return this.name;
    }
}
class Manager extends Employee {
    constructor() {
        super();
        this.name = 'John';
    }
    getName(): string {
        return super.getName();
    }
}
const emp = new Employee();
emp.name = 'John';
console.log(emp.getName()); // Error: Property 'getName' is protected and only accessible within class 'Employee' and its subclasses.
const mgr = new Manager();
console.log(mgr.getName()); // John
```

**Difference between private and protected**
Private access modifier is used to hide the property or method from outside the class. Protected access modifier is used to hide the property or method from outside the class and its subclasses.
