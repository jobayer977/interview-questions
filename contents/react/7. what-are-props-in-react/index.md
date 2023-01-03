---
title: What are props in React?
source: https://www.w3schools.com/react/react_props.asp#:~:text=Props%20are%20arguments%20passed%20into,props%20stands%20for%20properties.
---

Props are arguments passed into a component. They are single or multiple values that are passed into a component similar to how attributes are passed into an HTML element. They are data passed down from a parent component to a child component. It's useful to pass custom data into a component. Manually tiggering a re-render is not necessary.

**Example: Props in Class Based Component**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

class ChildComponent extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.name}</p>
				<p>{this.props.age}</p>
			</div>
		)
	}
}

class ParentComponent extends React.Component {
	render() {
		return (
			<div>
				<ChildComponent name='John' age='30' />
				<ChildComponent name='Mary' age='25' />
			</div>
		)
	}
}
```

**Example: Props in Functional Component**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const ChildComponent = (props) => {
	return (
		<div>
			<p>{props.name}</p>
			<p>{props.age}</p>
		</div>
	)
}

const ParentComponent = () => {
	return (
		<div>
			<ChildComponent name='John' age='30' />
			<ChildComponent name='Mary' age='25' />
		</div>
	)
}
```
