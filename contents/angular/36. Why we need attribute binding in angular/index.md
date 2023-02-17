---
title: Why we need attribute binding in angular ?
source: https://angular.io
---

If an attribute does't have corresponding DOM property then attribute binding are helpful to bind the attribute value to the DOM property.

```html
<table>
	<tr>
		<td [attr.colspan]="2">
			<span>Hello</span>
		</td>
	</tr>
</table>
```
