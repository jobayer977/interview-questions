---
title: How can we display a list in react ?
source: https://reactjs.org/
---

To Render a list in React. we can use the following code:

**Class Based Component**

```jsx
class App extends React.Component {
  state = {
    items: [],
  }
  componentDidMount() {
    this.setState({
      items: [
        { id: 1, text: 'item 1' },
        { id: 2, text: 'item 2' },
        { id: 3, text: 'item 3' },
      ],
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}
```

**Functional Component**

```jsx
const App = () => {
  const items = [
    { id: 1, text: 'item 1' },
    { id: 2, text: 'item 2' },
    { id: 3, text: 'item 3' },
  ]
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}
```
