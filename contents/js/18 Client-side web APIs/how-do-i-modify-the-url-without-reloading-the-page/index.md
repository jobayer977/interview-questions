---
title: How do I modify the url without reloading the page
---

The window.location.url property will be helpful to modify the url but it reloads the page. HTML5 introduced the history.pushState() and history.replaceState() methods, which allow you to add and modify history entries, respectively. For example, you can use pushState as below,

```javascript
window.history.pushState('page2', 'Title', '/page2.html');
```
