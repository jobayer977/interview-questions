---
title: What will the following code output and why?
source: https://www.toptal.com
---

```js
var b = 1;
function outer() {
	var b = 2;
	function inner() {
		b++;
		var b = 3;
		console.log(b);
	}
	inner();
}
outer();
```

<details>
    <summary>Answer</summary>

Output to the console will be “3”.

There are three closures in the example, each with it’s own var b declaration. When a variable is invoked closures will be checked in order from local to global until an instance is found. Since the inner closure has a b variable of its own, that is what will be output.

Furthermore, due to hoisting the code in inner will be interpreted as follows:

```js
function inner() {
	var b; // b is undefined
	b++; // b is NaN
	b = 3; // b is 3
	console.log(b); // output "3"
}
```

</details>
