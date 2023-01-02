---
title: How to check a word in exists on a string?
---

There are various ways to check a word in exist on string on not. but the most efficient way is to use includes method.

**Using includes method**

```javascript
var str = 'Hello World';
console.log(str.includes('World')); // true
```

**Using indexOf method**

```javascript
var str = 'Hello World';
console.log(str.indexOf('World')); // 6
```

**Using search method**

```javascript
var str = 'Hello World';
console.log(str.search('World')); // 6
```

**Using match method**

```javascript
var str = 'Hello World';
console.log(str.match('World')); // ["World"]
```
