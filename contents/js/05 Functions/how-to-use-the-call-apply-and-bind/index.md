---
title: How to Use the Call, Apply, and Bind ?
---

#### Call

Call invokes the function and allows you to pass in arguments one by one.

```js
const user = {
	name: 'Jobayer Hossain'
};

function greet(greet, ask) {
	return `Hello ${greet} ${this.name} ${ask}`;
}

const userJonCall = greet.call(user, 'Sir,', 'How are you ?');
// Hello Sir, Jobayer Hossain How are you ?
```

#### Apply

Apply invokes the function and allows you to pass in arguments as an array.

```js
const user = {
	name: 'Jobayer Hossain'
};

function greet(greet, ask) {
	return `Hello ${greet} ${this.name} ${ask}`;
}

const userJonApply = greet.apply(user, ['Sir', 'How are your?']);
// Hello Sir, Jobayer Hossain How are you?
```

#### Bind

Bind returns a new function, allowing you to pass in a this array and any number of arguments.

```js
const user = {
	name: 'Jobayer Hossain'
};

function greet(greet, ask) {
	return `Hello ${greet} ${this.name} ${ask}`;
}

const userJonBind = greet.bind(user);
const userJonResponse = userJonBind('Sir', 'How are your?');
// Hello Sir, Jobayer Hossain How are you ?
```
