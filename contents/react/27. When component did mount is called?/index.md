---
title: When component did mount is called?
source: https://www.geeksforgeeks.org/reactjs-lifecycle-components/
---
React component call the componentDidMount() method calls once after the component has been rendered to the DOM. This is where we can perform DOM-related operations, such as adding event listeners or timers. Because now out DOM is ready, we can start making changes to the DOM.

**Example**

```jsx
class App extends React.Component {
 state: Record<string, any> = {}
 constructor(props: any) {
  super(props)
  this.state = {
   count: 0,
  }
  this.handleClick = this.handleClick.bind(this)
 }

 componentDidMount() {
  console.log('Component Did Mount')
 }
 handleClick() {
  this.setState({
   count: this.state.count + 1,
  })
 }
 render() {
  console.log('Render Method')
  return (
   <div>
    <p>{this.state.count}</p>
    <button onClick={this.handleClick}>Increment</button>
   </div>
  )
 }
}
export default App

// Component Did Mount
// Render Method
// Render Method
// Render Method
// Render Method
// Render Method
// Render Method


```
