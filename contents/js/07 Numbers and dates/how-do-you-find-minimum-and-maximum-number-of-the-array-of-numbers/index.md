---
title: How do you find the minimum and the maximum number of the array of numbers?
---

There are various ways to solve this problem. One of the simplest ways is to use built-in functions. and the other way is to use a loop and if-else statement.

**Using built-in functions**

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var min = Math.min.apply(Math, numbers);
var max = Math.max.apply(Math, numbers);

console.log(min); // 1
console.log(max); // 10
```

**Using a loop and if-else statement.**

```javascript
var min = numbers[0];
var max = numbers[0];

for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] < min) {
		min = numbers[i];
	}
	if (numbers[i] > max) {
		max = numbers[i];
	}
}

console.log(min); // 1
console.log(max); // 10
```
