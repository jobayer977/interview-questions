---
title: What is Interpolation in angular ?
source: https://angular.io
---


Interpolation in Angular is getting the data displayed inside the view. Interpolation allows us to combine calculated strings into the text between the HTML element tags and within the attribute assignments. Interpolation refers to embedding expressions into marked-up text. By default, interpolation uses its delimiter, the double curly braces, {{ and }}.

<details>
  <summary>Example</summary>
  
  ```ts
@Component({
    selector: 'my-app',
    template: `
    <h1>Hello {{name}}</h1>
    `
    })
class AppComponent {
    name = 'Angular';
}
```
