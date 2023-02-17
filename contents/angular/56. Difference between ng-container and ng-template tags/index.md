---
title: Difference between ng-container and ng-template tags
source: https://stackoverflow.com/questions/40529537/ng2-difference-between-ng-container-and-ng-template-tags
---

### ng-template

`ng-template` is used for the structural directive like ng-if, ng-for and ng-switch. If you use it without the structural directive, nothing happens and it will render.

**Example:**

```html
<ng-template>
	<div>Hi</div>
</ng-template>
```

There is nothing shown on the screen.

```html
<ng-template *ngIf="true">
	<div>Hi</div>
</ng-template>
```

This will show the div on the screen with the text "Hi".

### ng-container

`ng-container` is used to group elements. It is not rendered on the screen. It is used to group elements and apply directives to them.

**Example:**

```html
<ng-container *ngIf="true">
	<div>Hi Container</div>
</ng-container>
```

This will show the div on the screen with the text "Hi Container".
