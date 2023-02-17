---
title: How many types of data binding are there in Angular?
source: https://angular.io
---

Angular provides three categories of data binding according to the direction of data flow:

- From source to view
- From view to source
- In a two-way sequence of view to source to view

**Interpolation Property Attribute Class Style**
One-way from data source to view target. Use `[]` or `{{}}` to bind from source to view

```html
{{expression}} [target]="expression"
```

**Event**
One-way from view target to data source. Use `()` to bind from view to source.

```html
(target)="statement"
```

**Two-way**
Two-way. Use `[()]` to bind in a two way sequence of view to source to view

```html
[(target)]="expression"
```
