---
title: What is the purpose of Array reduce method?
---

The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It takes two arguments: the reducer function and an initial value. The reducer function takes two arguments: the accumulator and the current value to be transformed. The accumulator is the result of the last call to the reducer function, or the initial value if this is the first call. The current value is the value of the current element being processed in the array. The reducer function must return the accumulator. It is useful for transforming an array to a single value.

```javascript
var array = [1, 2, 3, 4, 5];
var sum = array.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
}, 0);
console.log(sum); // 15
```
