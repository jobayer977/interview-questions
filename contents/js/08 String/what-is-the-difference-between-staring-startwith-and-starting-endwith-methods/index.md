---
title: What is the difference between staring startWith and starting endWith methods?
---

startWith method checks if the string starts with the given string. and `endWith()` method checks if the string ends with the given string.

**Example:**

```javascript
var str = 'Hello World';
str.startsWith('Hello'); // true
str.endsWith('World'); // true

str.startsWith('World'); // false
str.endsWith('Hello'); // false
```
