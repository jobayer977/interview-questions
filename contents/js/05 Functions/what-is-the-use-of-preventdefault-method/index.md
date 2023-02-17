---
title: What is the use of preventDefault method
---

The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.

```javascript
document.getElementById('link').addEventListener('click', function (event) {
	event.preventDefault();
});
```
