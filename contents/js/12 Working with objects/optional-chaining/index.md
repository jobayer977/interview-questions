---
title: What is Optional chaining ?
questions:
  [
    {
      question: '{ delete user?.name } will return ?',
      answer: ['Error', 'Delete if name property exist'],
      correctAnswer: 'Delete if name property exist'
    }
  ]
---

Optional chaining is the safe way to get access to nested object properties even if the intermediary property doesn't exist.

As an example let's say we have an empty user object when we access the `user.name` it returns undefined because we know in the user object name property doesn't exist. but if we attempt to access the firstName property in the nested name object it throws an Error. Becouse we attempt to access an undefined values property that might not exist.

At some point, we might expect the undefined instant of not getting an error. In Javascript we can use the `.?` syntax to check the left part for `null/undefined` and allowing to safely access nested properties.

```js
const user = {};
console.log(user.name); // undefined
console.log(user.name.age); // Property 'name' does not exist on type '{}'.
console.log(user.name?.age); // undefined
```
