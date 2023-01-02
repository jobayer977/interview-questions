---
title: What is the purpose of the finally?
---

The final statement executes after the try..catch statement gets a pass. Regardless of the result. If get an error on the catch block or closed on the try block. it will always get executed.

```javascript
var result = 18;
try {
	if (result > 10) {
		throw new Error('result is too large');
	}
} catch (e) {
	console.log(e);
} finally {
	console.log('finally');
}
```

**Output**

```properties
 Error: result is too large
 finally
```
