---
title: What are Modules in Typescript?
source: https://www.meziantou.net
---

In Typescript, we can use modules to organize our code. A module is a file that contains a group of related code. We can make some of them public to view from outside the module, and some of them private to hide from outside the module. To make a module public, we use the export keyword.

### Example

**index.ts**

```typescript
export class Person {
	name: string = ''
	constructor(public name: string) {
		this.name = name
	}
}
```

**App.ts**

```typescript
import { Person } from './index'

const person = new Person('John Doe')

console.log(person.name)
```
