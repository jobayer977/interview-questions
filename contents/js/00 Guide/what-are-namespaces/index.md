---
title: What are  namespaces?
---

The namespace is a programming paradigm it's used to avoid variable naming collisions. Help to organize code into logical groups. JavaScript does not provide namespace by default. However, we can replicate this functionality by making a global object which can contain all functions and variables.

**Example**

```javascript
const service = {
	get: function () {
		// Get Api Implemented
	},
	put: function () {
		// put Api Implemented
	},
	post: function () {
		// post Api Implmented
	}
};

service.get();
service.post();
```
