---
title: What are the directives ?
source: https://angular.io
---

Directives are classes that add new behavior or modify the existing behavior to the elements in the template. Basically directives are used to manipulate the DOM, for example adding/removing the element from DOM or changing the appearance of the DOM elements.

**Example of Angular directive**

```ts
@Component({
	selector: 'my-app',
	template: `
		<ul>
			<li *ngFor="let name of names">
				{{ name }}
			</li>
		</ul>
	`,
})
export class AppComponent {
	names: string[]
	constructor() {
		this.names = ['John', 'Mary', 'Mike']
	}
}
```

In this above code, the `*ngFor` directive is used to iterate over the names array and display the names in the template.
