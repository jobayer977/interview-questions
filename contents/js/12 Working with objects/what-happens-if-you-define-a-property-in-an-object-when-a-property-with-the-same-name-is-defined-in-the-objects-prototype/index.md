---
title: What happens if you define a property in an object, when a property with the same name is defined in the object's prototype?
---

Let's see:

```javascript
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
	console.log('something else!');
};

myDate.getYear(); // 'something else!'
```

When we call getYear() the browser first looks in myDate for a property with that name, and only checks the prototype if myDate does not define it. So when we add getYear() to myDate, then the version in myDate is called.
