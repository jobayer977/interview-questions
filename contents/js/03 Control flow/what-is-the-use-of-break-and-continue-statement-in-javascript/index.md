---
title: What is the use of break and continue statement in JavaScript?
---

**Break Statement**
The break statement is used at an instance whereby satisfying the condition being specified, the whole loop gets skipped and it takes you out of the loop. In other words, the loop is stopped

```javascript
for (i = 1; i <= 8; i++) {
	if (i === 5) break;
	console.log(i);
}
```

**Continue**
Let’s consider a situation where we are in a loop and we desire to break one iteration whenever a specified condition occurs and then we continue with the next iteration in the loop.

The Continue statement is going to fulfill that desire for us. Unlike break, the continue statement “jumps over” to the next iteration/execution of the loop.

Whenever a continue statement takes place, the loop condition is checked to see if the condition is satisfied or true and if so, it goes towards the next iteration.

```javascript
for (i = 1; i < 8; i++) {
	if (i === 3 || i === 4) continue;
	console.log(i);
}
```
