---
title: What are raw strings?
---

It's used to get the raw string form of template literals without processing to escape sequences (e.g. \n).

```javascript
var str = `Hello world \n Jon Snow`;
console.log(str);
// Hello world
//  Jon Snow

var rawStr = String.raw`Hello world \n Jon Snow`;
console.log(rawStr); //Hello world \n Jon Snow
```
