---
title:  What is purpose of proxies in javascript?
---
## What is purpose of proxies in javascript?

Proxy is a function that takes two arguments, the first is the object to be proxied and the second is the handler object. The handler object has properties that define the behavior of the proxy.

```javascript
const handler = {
 get: function (target, name) {
  console.log(`Getting ${name}`);
  console.log(target);
  return name in target ? target[name] : 'N/A';
 }
};

const target = {
 name: 'John',
 age: 30
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // John

```
