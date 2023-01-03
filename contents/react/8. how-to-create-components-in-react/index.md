---
title: How to create components in React?
---

There are two ways to create components in React:

    1. Create a component class.
    2. Create a function component.

1. **Create a component class.**
   ES6 class syntax is used to create a component class.

```jsx
import React from 'react'
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World</h1>
			</div>
		)
	}
}
```

2. **Create a function component.**
   Function syntax is used to create a function component.

   ```jsx
   import React from 'react'
   const App = () => {
   	return (
   		<div>
   			<h1>Hello World</h1>
   		</div>
   	)
   }
   ```

Both components can be rendered to the screen using ReactDOM.render().

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'))
```
