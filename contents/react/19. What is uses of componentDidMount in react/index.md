---
title: What is uses of componentDidMount in react
source: https://reactjs.org/
---

ComponentDidMount is a special method that React calls after the component has been rendered to the DOM. This is a good place to put your setup code.

**Note:** ComponentDidMount is called after the component has been rendered, not before.

```jsx
class MyComponent extends React.Component {
	componentDidMount() {
		// do something
	}
	render() {
		return <div />
	}
}
```
