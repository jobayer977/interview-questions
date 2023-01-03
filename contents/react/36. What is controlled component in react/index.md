---
title: What is controlled component in react ?
source: https://reactjs.org/
---

Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick,onChange, etc.

**Example**

```js
function App() {
	const [name, setName] = useState('')
	const [showName, setShowName] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		setShowName(true)
	}

	return (
		<div className='App'>
			<form>
				<label>Name:</label>
				<input
					name='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button onClick={handleSubmit} type='submit'>
					Submit
				</button>
			</form>
			{/* Checks the condition if showName is 
      true, which will be true only if 
      we click on the submit button */}
			{showName === true && <p>You have submitted. Name: {name}</p>}
		</div>
	)
}

export default App
```
