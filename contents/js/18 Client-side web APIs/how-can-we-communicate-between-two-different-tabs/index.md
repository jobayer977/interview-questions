---
title: How can we communicate between two different tabs?
---

Use BroadcastChannel Web API to communicate between two different tabs BroadcastChannel is a Web API that allows you to send and receive messages between different tabs.

```javascript
const bc = new BroadcastChannel('test_channel');

bc.onmessage = function (event) {
	console.log(event.data);
};

document.body.addEventListener('click', () => {
	bc.postMessage('hello');
});
```
