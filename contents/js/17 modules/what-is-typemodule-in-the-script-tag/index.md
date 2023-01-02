---
title: What is type="module" in the <script> tag?
---

It tells the browser that the script is a module. Now we can use the import and export keywords. import and export are used to import and export modules. This is useful for bundling and splitting code.It is also useful for lazy loading.

```javascript
<script type="module">
	import {(someVar, someFunc)} from './module.js'; console.log(someVar + someFunc());
</script>
```
