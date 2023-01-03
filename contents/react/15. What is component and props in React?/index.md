---
title: What is component and props in React?
source: https://reactjs.org/
---

Component is a function It accepts props as an argument and returns a React element. Return elements describe the UI how it should look. A component can be uses in other components jsx, or in the root component. In React there are two types of components: Class based and Functional Components.

**Class based Components**
Class based components are the most common type of components. They are the ones that are written in JavaScript ES6 classes.

```js
class MyComponent extends React.Component {
	render() {
		return <h1>Hello World</h1>
	}
}
```

**Functional Components**
Functional components are the ones that are written in JavaScript ES6 functions.

```js
const MyComponent = () => <h1>Hello World</h1>
```

### **Props**

Props are the properties that are passed to a component.

```js
const MyComponent = (props) => <h1>{props.title}</h1>
```
