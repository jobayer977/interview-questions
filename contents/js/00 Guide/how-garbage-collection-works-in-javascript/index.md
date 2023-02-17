---
title: How garbage collection works in JavaScript ?
---

In JavaScript, the memory management process is automated. The browser takes care of that thing for us. When a variable function or object is created in javascript the memory space is created for the reading and write operations. after the operations are done and no longer references are connected to the variable then the garbage collector release the variables from memory spaces. The Garbage Collection mechanism in JavaScript is governed by two algorithms

**Reference Counting Algorithm**
It determines the usefulness of an object by finding out if the object is being referenced by some other object or not.

**Mark and Sweep Algorithm.**
If an object is having zero references then it is effectively unreachable. So it is fit to be a garbage.
