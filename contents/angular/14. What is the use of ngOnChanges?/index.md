---
title: What is the use of ngOnChanges?
source: https://angular.io
---

`ngOnChanges` triggers following the modification of @Input bound class members. Data bound by the @Input() decorator come from an external source. When the external source alters that data in a detectable manner, it passes through the @Input property again.

The ngOnChanges hook, with it’s SimpleChanges object, is a little different. Here’s how you would implement it. Let’s say we have a component used like this:

```html
<my-todo [title]="title" [content]="content"></my-todo>
```

Now say that we want to do something when the title property changes:

```ts
@Component({
	selector: 'my-todo',
	templateUrl: './my-todo.component.html',
	styleUrls: ['./my-todo.component.css'],
})
export class MyTodoComponent implements OnChanges {
	@Input() title: string
	@Input() content: string
	constructor() {}
}
```
