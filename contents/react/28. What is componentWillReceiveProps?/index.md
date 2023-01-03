---
title: What is componentWillReceiveProps?
source: https://reactjs.org/
---
This method is used during the updating phase of the React lifecycle. This function is generally called if the props passed to the component change. It is used to update the state in response with the new received props.

```jsx
class App extends React.Component {
 state: Record<string, any> = {}
 constructor(props: any) {
  super(props)
  this.state = {
   count: 0,
  }
 }
 render() {
  return (
   <>
    <Child currentCount={this.state.count} />
    <button
     onClick={() =>
      this.setState({
       count: this.state.count + 1,
      })
     }>
     Increment
    </button>
   </>
  )
 }
}

```

**Child**

```jsx
 class Child extends Component<{ currentCount: number }> {
 componentWillReceiveProps(nextProps: any): void {
  console.log('componentWillReceiveProps', nextProps)
 }
 render() {
  return <div>Count - {this.props.currentCount}</div>
 }
}```
