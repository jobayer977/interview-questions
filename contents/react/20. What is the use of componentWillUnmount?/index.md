---
title: What is the use of componentWillUnmount?
source: https://reactjs.org/
---

This life cycle method is called when a component is unmounted and destroyed. It is a good place to clean up any resources that were allocated during the component's life cycle. Such as timers, event listeners, and network requests or any subscriptions to external data sources.

**Example of componentWillUnmount**

```jsx
class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = { date: new Date() }
	}
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000)
	}
	componentWillUnmount() {
		clearInterval(this.timerID)
	}
	tick() {
		this.setState({
			date: new Date(),
		})
	}
	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
}
```

The above code will render the clock every second. When the component is unmounted, the timer is cleared.
