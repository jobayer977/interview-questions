---
title: What are the 3 states of promise?
---

**Pending**
the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.

**Fulfilled**
The asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.

**Rejected**
The asynchronous function has failed. When a promise is rejected, its catch() handler is called.
