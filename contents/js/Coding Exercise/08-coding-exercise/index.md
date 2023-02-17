---
title: How do you add an element at the begining of an array? How do you add one at the end?
source: https://www.toptal.com
---

<details>
    <summary>Answer</summary>

```js
var myArray = ['a', 'b', 'c', 'd'];
myArray.push('end');
myArray.unshift('start');
console.log(myArray); // ["start", "a", "b", "c", "d", "end"]
```

With ES6, one can use the spread operator:

```js
myArray = ['start', ...myArray, 'end'];
```

</details>
