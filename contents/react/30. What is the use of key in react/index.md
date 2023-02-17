---
title: What is the use of key in react ?
source: https://reactjs.org/
---

Keys are used to identify which item in a list has changed. Keys should be unique for each item in a list. The best way to generate a key is to use the item's IDs in the list.

```jsx
const items = [
  { id: 1, text: 'Hello' },
  { id: 2, text: 'World' },
  { id: 3, text: '!' },
];

const listItems = items.map(item => (
  <li key={item.id}>{item.text}</li>
));
```
