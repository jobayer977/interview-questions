---
title: Difference TypeError and ReferenceError ?
---

A **ReferenceError** occurs when you try to use a variable that doesn't exist at all.

A **TypeError** occurs when the variable exists, but the operation you're trying to perform is not appropriate for the type of value it contains. In the case where the detailed message says "is not defined", this can occur if you have a variable whose value is the special undefined value, and you try to access a property of it.
