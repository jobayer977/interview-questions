---
title: How do you replace a specific part of a string?
---

Use the replace method. The replace method takes two arguments: the first is the string to be replaced, and the second is the string to replace it with and returns a new string. For example, if you wanted to replace the word "hello" with "goodbye", you would use the replace method like this: "hello".replace("hello", "goodbye");

```javascript
var str = 'hello world';
var newStr = str.replace('hello', 'goodbye');
// newStr: "goodbye world"
```
