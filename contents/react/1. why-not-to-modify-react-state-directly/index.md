---
title: Why Not To Modify React State Directly ?
source: https://www.xxxxx.com
---

When we manually modify the state it won't trigger the component to re-render. So it's better to use the setState method.

```jsx
this.setState({
	count: this.state.count + 1,
})
```

```jsx
const [count, setCount] = useState(0)
setCount(count + 1)
```
