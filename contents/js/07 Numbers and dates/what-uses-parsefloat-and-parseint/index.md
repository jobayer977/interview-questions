---
title: What uses parseFloat and parseInt?
---

`parseFloat` and parseInt are used to convert a string to a number. parseFloat converts a string to a floating point number and parseInt converts a string to an integer. It is important to note that parseFloat and parseInt do not convert a string to a number if the string contains a decimal point. for example, parseFloat("1.2") will return 1.2 and parseInt("1.2") will return 1.

**Example**

```javascript
var num = '1.2';

parseFloat(num); // 1.2
parseInt(num); // 1
```
