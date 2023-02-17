---
title: What is cookies ?
---

Cookies are small pieces of data that are stored on the user's computer. Cookies are widely used in websites to remember the user's preferences and to track the user's browsing activity.

```javascript
document.cookie = 'username=John Doe';
```

**Set a max age of 30 days**

```javascript
document.cookie = 'username=John Doe; max-age=2592000';
```

**Get the cookie**

```javascript
document.cookie; // 'username=John Doe'
```
