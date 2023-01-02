---
title: What does "!--" do in JavaScript?
---

That's not a special operator, it's 2 standard operators one after the other:

- A prefix decrement (--)
- A logical not (!)

```javascript
x = 1;
if (!x) // false
if (!--x) // becomes 0 and then uses the NOT operator,
          // which makes the condition to be true
```
