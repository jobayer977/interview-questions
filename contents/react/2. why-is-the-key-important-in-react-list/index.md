---
title: Why is the key important in React list?
source: https://betterprogramming.pub/why-react-keys-matter-an-introduction-136b7447cefc
---

The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. To use keys, simply add the prop inside an element such as `<li>` . Unique IDs are the best value to assign to keys.

**Example:**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
	const names = ['John', 'Sara', 'Mark']
	return (
		<div>
			<h1>Hello World</h1>
			<ul>
				{names.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>
		</div>
	)
}
```
