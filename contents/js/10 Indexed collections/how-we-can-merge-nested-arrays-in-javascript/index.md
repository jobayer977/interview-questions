---
title: How we can merge nested arrays in javascript?
---

use `reduce` method and use `concat` method to merge arrays.

```javascript
const nestedArr1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9, [10, 11, 12]]
];
const nestedArr2 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9, [10, 11, 12]],
	[13, 14, 15]
];

function mergeArrays(arr1, arr2) {
	return normalizeNestedArray(arr1).concat(normalizeNestedArray(arr2));
}

function normalizeNestedArray(arr) {
	return arr.reduce((acc, curr) => {
		if (Array.isArray(curr)) {
			return acc.concat(normalizeNestedArray(curr));
		} else {
			return acc.concat(curr);
		}
	}, []);
}

mergeArrays(nestedArr1, nestedArr2);
```

**Explanation**
First we normalize the nested arrays by reducing the array to a single array. then we merge the arrays. and finally we normalize the merged array.
