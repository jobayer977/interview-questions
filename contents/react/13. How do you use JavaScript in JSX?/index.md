---
title: How do you use JavaScript in JSX?
source: https://reactjs.org/
---

To add Javascript code inside JSX, you need to use the { } syntax. In curly braces, you can write any valid JavaScript code. The code will be executed when the component is rendered.

**Example of Javascript in JSX**

```jsx
const App = () => (
	<div>
		<h1>{2 + 2}</h1>
		<p>This is a paragraph.</p>
	</div>
)
```

The above code will render the following HTML:

```html
<div>
	<h1>4</h1>
	<p>This is a paragraph.</p>
</div>
```

We can also use Javascript expressions inside attributes of JSX elements.

```jsx
const App = () => {
	const source = 'https://facebook.github.io/react/img/logo_og.png'
	return (
		<div>
			<img src={source} />
		</div>
	)
}
```
