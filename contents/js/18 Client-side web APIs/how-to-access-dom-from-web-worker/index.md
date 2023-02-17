---
title: How to access DOM from web worker?
---

The web worker's browser's DOM cannot be accessed, for reasons of execution thread safety. However, postmessages can establish communication with the browser window. So DOM can be updated based on postmessage.

**Example**

```html
<html>
	<body>
		<h1 id="time">Time:</h1>
	</body>
	<script>
		const time = document.getElementById('time');
		const worker = new Worker('worker.js');
		worker.onmessage = (e) => {
			time.innerHTML = e.data;
		};
	</script>
</html>
```

`worker.js`

```javascript
setInterval(() => {
	postMessage(new Date().toLocaleString());
}, 1000);
```

**Output**

```nginx
8/9/2022, 1:08:24 AM
```
