---
title: What is the use case of session storage in the web application?
---

Session storage creates a session for the user and stores the data in the browser. And the date is disappears when the user closes the browser. The use case would be let's say we went to show an popup for first time when the user is entering the website. We want to show the popup only once. So we can use session storage.

```javascript
const sessionStorage = window.sessionStorage;
sessionStorage.setItem('isFirstTime', 'false');
const isFirstTime = sessionStorage.getItem('isFirstTime');
if (isFirstTime === 'false') {
	// do something
}
```
