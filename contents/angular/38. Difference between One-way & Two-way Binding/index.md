---
title: Difference between One-way & Two-way Binding
source: https://angular.io
---

In one-way binding, the flow is one-directional. In a two-way binding, the flow is two-directional. This means that the flow of code is from ts file to Html file. This means that the flow of code is from ts file to Html file as well as from Html file to ts file.

**One-way binding**

```ts
@Component({
	selector: 'my-app',
	template: `
		<input type="text" (keyup)="onKeyUp($event)" />
		<p>{{ values }}</p>
	`,
})
export class AppComponent {
	values = ''
	onKeyUp(e) {
		this.values += e.target.value
	}
}
```

**Two-way binding**

```ts
@Component({
	selector: 'my-app',
	template: `
		<input type="text" [(ngModel)]="name" />
		<p>Hello {{ name }}</p>
	`,
})
export class AppComponent {
	name = 'Angular'
}
```
