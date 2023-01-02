---
title: What are closures scope chains?
---

Closures are functions that have access to the outer function’s variables even after the outer function has returned. This is useful when you want to return a function from a function and you want to be able to access the outer function’s variables. Every closure has three scopes: its scope, the outer function’s scope, and the global scope.
