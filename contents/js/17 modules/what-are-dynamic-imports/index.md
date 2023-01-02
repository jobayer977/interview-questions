---
title: What are dynamic imports?
---

Dynamic import is a function that allows us to load modules on demand by using promise or async await syntax. The main advantage is to reduce bundle size. and response size. speed up user experience.

```javascript
import('./Module').then((Module) => Module.method());
```
