---
title: What is strict mode?
---

Strict mode is a way to tell the JavaScript engine to be more strict when running your code. Strict mode changes some of the ways that JavaScript treats your code to be more predictable and to prevent you from making errors. Strict mode is not a way to enforce the coding style of your code, but it can help you to be more predictable.

Strict mode can be enabled by adding the strict mode directive at the beginning of your code or before any statement which you want to be in strict mode.

**Global scope strict mode**

```javascript
'use strict';
```

**Local scope strict mode**

```javascript
function foo() {
	'use strict';
	return this;
}
```
