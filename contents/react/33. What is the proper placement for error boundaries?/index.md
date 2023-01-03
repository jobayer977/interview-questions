---
title: What is the proper placement for error boundaries?
source: https://reactjs.org/
---

Error boundaries are React components that catch and display errors that occur in their children. They are useful for displaying error messages to the user. So it's best to place error boundaries at the top of the component tree and catch errors all the way down.
