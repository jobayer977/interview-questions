---
title: What is Components?
source: https://angular.io
---

In Angular, Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components. Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.

- Components are typically custom HTML elements, and each of these elements can instantiate only one component.
- A TypeScript class is used to create a component. This class is then decorated with the `@Component` decorator. The decorator accepts a metadata object that gives information about the component.
- A component must belong to the NgModule in order for it to be usable by another component or application.
- Components control their runtime behavior by implementing Life-Cycle hooks.

**Example of an Component**

```TypeScript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
}
```
