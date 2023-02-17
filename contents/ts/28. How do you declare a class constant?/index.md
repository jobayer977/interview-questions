---
title: How do you declare a class constant?
---

Typescript allows you to declare a constant inside a class. But we can use the readonly keyword to declare a constant. It is a constant that is shared by all instances of a class. But it is not modifiable.

**Example:**

```typescript
class Person {
	readonly name: string = ''
	constructor(public name: string) {
		this.name = name
	}
}

const person = new Person('John Doe')
console.log(person.name)

person.name = 'Jane Doe' // Error: Cannot assign to 'name' because it is a constant or a read-only property.
```
