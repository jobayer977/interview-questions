---
title: How do you define a component template?
source: https://angular.io
---

To define a component template, you must use the `template` property in the component metadata. there are two ways to define a template: inline and external.

**Inline template**

```ts
@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
  `
})
export class AppComponent {
  name = 'Angular';
}
```

**External template**

```ts
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Angular';
}
```
