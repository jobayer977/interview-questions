---
title: Why should we use ES6 classes?
---

ES6 classes are syntactic sugar for the prototypical class system we use today. They make code more concise and self-documenting, which is reason enough to use them.

- The syntax is more clear and less error-prone
- The syntax is also way more clean and easier to understand.
- Setting up inheritance is really easy.
- You can inherit from Array, which wasn't possible before.
- In a subclass, calling a parent's function is very easy: just type super.

**WithOut ES6 class:**

```javascript
var Foo = (function () {
	function Foo(bar) {
		this._bar = bar;
	}

	Foo.prototype.getBar = function () {
		return this._bar;
	};

	return Foo;
})();
```

**With ES6 class:**
The syntax is also way more clean and easier to understand.

```javascript
class Foo {
	constructor(bar) {
		this._bar = bar;
	}

	getBar() {
		return this._bar;
	}
}
```
