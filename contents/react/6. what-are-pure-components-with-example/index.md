---
title: What are pure components with example?
---

Pure component, it is only re-rendered when its props change. They are a good way to optimize your application. Pure components are a good way to avoid bugs caused by side-effects. It's doesn't have a life cycle or state.

**Example of a pure component:**

```jsx
import React from 'react'

const PureComponent = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
		</div>
	)
}

export default PureComponent
```

**Example of a component that is not pure:**

```jsx
import React from 'react'

const Component = (props) => {
	const [count, setCount] = React.useState(0)
	useEffect(() => {
		fetch('https://api.github.com/users/facebook/repos')
			.then((res) => res.json())
			.then((data) => {
				setCount(data.length)
			})
	}, [])

	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}
```
