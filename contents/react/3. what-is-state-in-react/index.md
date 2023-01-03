---
title: What is state in React?
source: https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state
---

State is a plain JavaScript object that represents the state of a React component. That may change over time as the component updates over the component's lifecycle.

State is the only part of a React component that can change over time.

**Example: State in Class Based Component**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
		}
	}
	render() {
		return (
			<div>
				<p>You clicked {this.state.count} times</p>
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click me
				</button>
			</div>
		)
	}
}
```

**Example: State in Functional Component**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const MyComponent = () => {
	const [count, setCount] = React.useState(0)
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}
```
