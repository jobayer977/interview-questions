---
title: What is immutability?
---

Immutability is the property of data that never changes. It is the property of data that never changes. For example, a person's name is immutable. If you change a person's name, you can't change it back.

```javascript
'use strict';
const person = {
	name: 'John',
	age: 30
};
// Make it immutable
Object.freeze(person);
```
