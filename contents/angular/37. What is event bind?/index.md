---
title: What is event bind?
source: https://angular.io
---

Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

**Example:**

```typescript
@Component({
	selector: 'my-app',
	template: ` <button (click)="onClick()">Click me</button> `,
})
export class AppComponent {
	onClick() {
		alert('Hello World!')
	}
}
```
