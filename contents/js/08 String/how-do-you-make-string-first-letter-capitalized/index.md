---
title: How do you make string first letter capitalized?
---

The first letter of the string is capitalized using the `toUpperCase()` method. So first we need to get the first letter of the string and then we can use the `toUpperCase()` method to capitalize it.

**Example:**

```javascript
var str = 'hello world';
var firstLetter = str.charAt(0);
var restOfString = str.slice(1);
var capitalizedString = firstLetter.toUpperCase() + restOfString; //
console.log(capitalizedString); // Hello World
```

**Explanation:**

We get the first letter of the string and then we use the `toUpperCase()` method to capitalize it. We then concatenate the capitalized letter with the rest of the string using the `slice()` method. The `slice()` method returns a new string from the original string based on the start and end index provided.
