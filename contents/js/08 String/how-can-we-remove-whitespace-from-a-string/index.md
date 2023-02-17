---
title: How can we remove whitespace from a string?
---

use the string built-in method .trim() method to remove whitespace from a string. But be careful, this method only removes whitespace from the beginning and end of the string.

```javascript
var str = '   Hello World   ';
str.trim(); // returns "Hello World"
```
