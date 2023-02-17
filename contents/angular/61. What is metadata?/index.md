---
title: What is metadata?
source: https://www.freetimelearning.com/software-interview-questions-and-answers.php?What-is-metadata-in-Angular?&id=442#:~:text=Angular%20Interview%20Questions-,What%20is%20metadata%20in%20Angular%3F,that%20AppComponent%20is%20the%20component.
---

Metadata is used to decorate the class so that it can configure the expected behavior of a class. Decorators are the core concept when developing with Angular (versions 2 and above). The user can use metadata to a class to tell Angular app that AppComponent is the component. Metadata can be attached to the TypeScript using the decorator.

```ts
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'app'
}
```

`@Component` is a decorator which makes use of configuration object to
create the component and its view.
