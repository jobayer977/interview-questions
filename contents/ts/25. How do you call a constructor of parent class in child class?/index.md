---
title: How do you call a constructor of parent class in child class?
---

To call a constructor of parent class in child class, we use `super` keyword.

**Example:**

```typescript
class Person {
	name: string = ''
	constructor(public name: string) {
		this.name = name
	}
}

class Employee extends Person {
	constructor(public name: string) {
		super(name)
	}
}

const employee = new Employee('John Doe')
console.log(employee.name)
```
