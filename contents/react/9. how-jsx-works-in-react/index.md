---
title: How JSX works in React ?
---

JSX is a syntax extension to JavaScript that allows us to write HTML like syntax. It is a subset of JavaScript that allows us to write HTML-like syntax.

**Withouts JSX we would have to write HTML like syntax.**

```jsx
const element = React.createElement(
	'div',
	null,
	React.createElement('h1', null, 'This is a header'),
	React.createElement('p', null, 'This is a paragraph')
)
```

**With JSX we can write HTML like syntax.**

```jsx
const element = (
	<div>
		<h1>This is a header</h1>
		<p>This is a paragraph</p>
	</div>
)
```

JSX uses babel to transpile HTML like syntax to JavaScript. Babel is a compiler that transpiles JavaScript code to JavaScript.
