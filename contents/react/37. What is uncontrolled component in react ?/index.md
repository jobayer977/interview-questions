---
title: What is uncontrolled component in react ?
source: https://reactjs.org/
---

In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

To write an uncontrolled component, instead of writing an event handler for every state update, we can use a `ref` to get form values from the DOM.
