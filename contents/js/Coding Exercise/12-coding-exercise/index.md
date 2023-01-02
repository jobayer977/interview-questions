---
title: What is the output of below code ?
source: https://github.com/sudheerj/javascript-interview-questions#coding-exercise
---

```js
var car = new Vehicle('Honda', 'white', '2010', 'UK');
console.log(car);
function Vehicle(model, color, year, country) {
	this.model = model;
	this.color = color;
	this.year = year;
	this.country = country;
}
```

<details>
    <summary>Answer</summary>

The function declarations are hoisted similar to any variables. So the placement for Vehicle function declaration doesn't make any difference.

</details>
