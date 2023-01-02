---
title: What is the output of below code ?
source: https://github.com/sudheerj/javascript-interview-questions
---

```js
function foo() {
	let x = (y = 0);
	x++;
	y++;
	return x;
}

console.log(foo(), typeof x, typeof y);
```

<details>
    <summary>Answer</summary>

Of course the return value of foo() is 1 due to the increment operator. But the statement let x = y = 0 declares a local variable x. Whereas y declared as a global variable accidentally. This statement is equivalent to,

```js
let x;
window.y = 0;
x = window.y;
```

</details>
