---
title: what is o(n) time complexity
---

Linear time complexity O(n) means that the algorithms take proportionally longer to complete as the input grows.

Examples of linear time algorithms: Get the max/min value in an array.

```js
function getMax(arr) {
	let max = arr[0]
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
	}
	return max
}

function getMin(arr) {
	let min = arr[0]
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		}
	}
	return min
}

const arr = [1, 2, 3, 4, 5]

const max = getMax(arr)
const min = getMin(arr)
```

In the above example, the algorithm is O(n) because it has to loop through the array once to find the max and once to find the min value. The loop is dependent on the size of the array.
