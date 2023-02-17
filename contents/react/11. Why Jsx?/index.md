---
title: Why Jsx?
source: https://reactjs.org/
---

JSX is a JavaScript syntax extension for React. It allows you to write HTML-like syntax in your JavaScript code. React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

**JSX in React**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello, world!</h1>

ReactDOM.render(element, document.getElementById('root'))
```
