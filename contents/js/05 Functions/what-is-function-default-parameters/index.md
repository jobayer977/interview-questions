---
title: What is function default parameters?
---

Default parameters are parameters that are set to a default value if they are not passed to the function. Default parameters are useful for functions that have optional parameters. Default parameters are also useful for functions that have multiple parameters with default values.

```javascript
// Example
function greet(name = 'Anonymous') {
	console.log('Hello ' + name + '!');
}

greet(); // Hello Anonymous!
```
