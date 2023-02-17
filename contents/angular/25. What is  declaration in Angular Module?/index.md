---
title: What is  declaration in Angular Module ?
source: https://angular.io
---

In Angular module, Declaration is a list that contains all the components, directives, pipes, and services that belong to the module.

**Component:**  Component is a UI building block. A component is a self-contained piece of UI that only needs to be built once, and can be used multiple times in other parts of an application.

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
```

**Directive:**  Directive are classes that contain a custom behavior. A directive is a behavior that can be attached to elements in the DOM.

```typescript
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

**Pipe:**  Pipes are a simple way to transform the values in an angular template.

```typescript
@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(value: string) {
    return value.split('').reverse().join('');
    }
}
```
