---
title: What is meant by linear search?
source: https://www.bbc.co.uk/bitesize/guides/z7kkw6f/revision/7
---

A linear search is a simple search algorithm that looks at each element in the data set and checks if the element is the one you are looking for. Starting at the beginning of the data set. Once the item is found, the search ends.

```javascript
function linearSearch(arr, item) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			return true
		}
	}
	return false
}

linearSearch([1, 2, 3, 4, 5], 3) // true
```

**Big O Notation**
The time complexity is O(n) because the algorithm has to look at each element in the data set.
