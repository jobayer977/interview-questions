---
title: What is the output of below code
---

```javascript
var arr1 = 'john'.split('');
var arr2 = arr1.reverse();
var arr3 = 'jones'.split('');
arr2.push(arr3);

console.log('array 1: length=' + arr1.length + ' last=' + arr1.slice(-1));
console.log('array 2: length=' + arr2.length + ' last=' + arr2.slice(-1));
```

<details>
    <summary>Answer</summary>

```javascript
// array 1: length=5 last=j,o,n,e,s
// array 2: length=5 last=j,o,n,e,s
```

</details>
