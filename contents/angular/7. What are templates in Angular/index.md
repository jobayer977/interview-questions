---
title: What are templates in Angular
source: https://angular.io
---

In Angular, templates are the HTML that is used to render the application. It's responsible for the layout and content and how it is displayed in the UI. Every component has an HTML template that declares how that component renders. You define this template either inline or by file path. Angular extends HTML with additional syntax that lets you insert dynamic values from your component. Angular automatically updates the rendered DOM when your component's state changes.

**Example of a angular template**

```ts
@Component({
	selector: 'my-app',
	template: `
		<h1>Hello {{ name }}</h1>
		<p>This is some content</p>
	`,
})
export class AppComponent {
	name = 'Angular'
}
```

Here name is a property that is bound to the {{ name }} in the template. It's an syntax that is used to insert dynamic values into the template.
