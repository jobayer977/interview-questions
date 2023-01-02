---
title: What are server-sent events?
---

Server-Sent Events is a server push technology enabling a client to receive automatic updates from a server via an HTTP connection, and describes how servers can initiate data transmission towards clients once an initial client connection has been established.

- SSE is based on the plain HTTP
- It is limited to pure text data, no binaries allowed

```javascript
const eventSource = new EventSource('https://server.domain');

eventSource.addEventListener('message', (event) => {
	// "event.data" is a string
	const data = JSON.parse(event.data);

	// Prints whatever was sent by the server
	console.log(data);
});
```

[Reference](https://vhudyma-blog.eu/a-complete-guide-to-server-sent-events-in-javascript/)
