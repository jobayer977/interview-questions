---
title: How to get a specific query param value from an URL?
---

The `new URL` object provides a way to handle a URL string. It accepts an URL string and this object contains `searchParams` property which can be used to extract a query params value.

**Example**

```javascript
const url = new URL('https://domain.com?page=1&take=20');
console.log(url.searchParams.get('page'));
// 1
```
