---
title: Why Use Property Binding?
source: https://angular.io
---
Property binding helps us bind the values to a target property of an element enclosed within the square brackets. Property binding is the technique that will help us bind values to HTML elements’ properties.

<details>
  <summary>Example</summary>

  ```ts
@Component({
    selector: 'my-app',
    template: `
    <input type="text" [(ngModel)]="name" />
    `
})
class AppComponent {
    name = 'Angular';
}
```

</details>
