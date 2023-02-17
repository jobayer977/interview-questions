---
title: Difference between HTML and React Event Handling?
source: https://www.geeksforgeeks.org/difference-between-html-and-react-event-handling/
---

There are have some syntactic and differences rules between HTML and React event handling.

**HTML** HTML event handling is done using the attribute or the addEventListener method. It directly works on the DOM (Real) element.

```html
<button onclick="alert('Hello')">Click Me</button>

<script>
	const button = document.querySelector('button')
	button.addEventListener('click', function () {
		alert('Hello')
	})
</script>
```

**React** we use the concept of virtual DOM, so all the events need to specify at the time of creating the component. Here in App.js file, we have defined one component App, which is having a button. We have used “onClick” event and we are providing a method name instead of a string. As in JSX,

```jsx
const App = () => {
	const handleClick = () => {
		alert('Hello')
	}
	return (
		<div>
			<button onClick={handleClick}>Click Me</button>
		</div>
	)
}
```
