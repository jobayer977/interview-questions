---
title: What is a purpose of code splitting?
source: https://reactjs.org/
---

Code Splitting is a technique for splitting large JavaScript files into smaller chunks. When we bundle our application we combine all the code into a single file and the browser initially loads the whole code. This can be a problem if the code is large and the browser has to download it all at once. Her Code splitting allows us to split the code into smaller chunks(file) and load each chunk separately when it is needed.

<details>
<summary>Example</summary>

```jsx
const ChildComponent = React.lazy(() => import('./ChildComponent'))

const App = () => (
	<React.Suspense fallback={<div>Loading...</div>}>
		<ChildComponent />
	</React.Suspense>
)
```

<details>
