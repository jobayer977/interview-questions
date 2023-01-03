---
title: What is angular markup ?
source: https://angular.io
---

Angular markup is a way to write HTML in angular. It is a superset of HTML where we can modify HTML elements before the are displayed. For example, we can add custom attributes `loop` over an array of items and display them in a list `if else` condition etc.

**Example:**

```html
<ul>
  <li *ngFor="let item of items">
    {{item}}
  </li>
</ul>
<p *ngIf="items.length == 0">
  There are no items in the list.
</p>
```
