---
title: What is the difference between interface and classes?
---

A class is a blueprint from which we can create objects that share the same configuration - properties and methods. An interface is a group of related properties and methods that describe an object, but don't specify how they are implemented.

**Example of class:**

```typescript
class Person {
	name: string = ''
	constructor(public name: string) {
		this.name = name
	}
}

const person = new Person('John Doe')
console.log(person.name)
```

**Example of interface:**

```typescript
interface Person {
	name: string
}

const person: Person = {
	name: 'John Doe',
}
console.log(person.name)
```
