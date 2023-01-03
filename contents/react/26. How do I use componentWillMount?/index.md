---
title: How do I use componentWillMount?
source: https://reactjs.org/
---

In React, the componentWillMount() method is called before the render() method. This is where we can set up any initial state or perform any other operations before the render() method is called.

**Note:** `componentWillMount()` is now deprecated in favor of `componentDidMount()`. Because it could be called multiple times, and maybe memory leaks could occur, So it is recommended to use `componentDidMount()` instead.

**Example:**

```jsx

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentWillMount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default App;
```

**OUTPUT:**

```html
<div>1</div>
```
