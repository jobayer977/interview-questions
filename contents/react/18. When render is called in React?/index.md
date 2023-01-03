---
title: When render is called in React?
source: https://reactjs.org/
---

First of all, `render()` is not user callable. It is part of the React component lifecycle. Generally, it gets called by React at various app stages when the React component instantiates for the first time, or when there is a new update to the component state. Render does not take any arguments and returns a JSX.
