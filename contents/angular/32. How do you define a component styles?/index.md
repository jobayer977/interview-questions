---
title: How do you define a component styles?
source: https://angular.io
---

Angular applications are styles with standard CSS syntax. Here we can use global styles, component styles, and inline styles.

**Global styles**: Global styles are defined in the `<head>` of the HTML document. In angular global styles are `styles.css`. in root directory. Angular automatically injects the global styles into the `<head>` of the HTML document.

```css
h1 {
  color: red;
}
```

**Component styles**: Component styles are defined in the `styles` property of the component metadata.

```ts
@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
  `,
  styles: [`h1 { color: red; }`]
})
export class AppComponent {
  name = 'Angular';
}
```

**Inline styles**: Inline styles are defined HTML attributes.

```html
<div [style.background-color]="'yellow'">
  <h1>Hello {{name}}</h1>
</div>
```
