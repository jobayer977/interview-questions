<details>
<summary>0 Why Angular?</summary>

JavaScript is the most commonly used client-side scripting language. It is written into HTML documents to enable interactions with web pages in many unique ways. As a relatively easy-to-learn language with pervasive support, it is well-suited to develop modern applications. But is JavaScript ideal for developing single-page applications that require modularity, testability, and developer productivity? Perhaps not. These days, we have a variety of frameworks and libraries designed to provide alternative solutions. With respect to front-end web development, Angular addresses many, if not all, of the issues developers face when using JavaScript on its own.

Angular Provide a collection of integrated libraries that cover a wide variety of features, including: routing forms management client server communication and more. Angular is designed to make updating as straightforward as possible so take advantage of the latest features development tools and libraries.

</details>


<details>
<summary>1 What are the directives ?</summary>

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

</details>


<details>
<summary>2 What are the order of angular lifecycle hooks execution ?</summary>

Angular gives us 8 hooks to allow us to tap into the lifecycle of our components and trigger actions at specific points in the lifecycle.

Here are the lifecycle hooks available , in the order which they are invoked:

1. ngOnChanges
2. ngOnInit
3. ngDoCheck
4. ngAfterContentInit
5. ngAfterContentChecked
6. ngAfterViewInit
7. ngAfterViewChecked
8. ngOnDestroy

**ngOnChanges** Called every time a data-bound input property changes. It’s called a first time before the ngOnInit hook. The hook receives a SimpleChanges object that contains the previous and current values for the data-bound inputs properties. This hook gets called often, so it’s a good idea to limit the amount of processing it does.

**ngOnInit** Called once upon initialization of the component.

**ngDoCheck** Use this hook instead of ngOnChanges for changes that Angular doesn’t detect. It gets called at every change detection cycle, so keeping what it does to a minimum is important for performance.

**ngAfterContentInit** Called after content is projected in the component.

**ngAfterContentChecked** Called after the projected content is checked.

**ngAfterViewInit** Called after a component’s view or child view is initialized.

**ngAfterViewChecked** Called after a component’s view or child view is checked.

**ngOnDestroy** Called once when the component is destroyed and a good hook to use to cleanup and unsubscribe from observables.

</details>


<details>
<summary>3 What is lifecycle hooks ?</summary>

The lifecycle of a component/directive is managed by Angular as it creates, checks, updates, renders, and destroys. To have a view of all these occurrences and respond to these moments, Angular provides lifecycle hooks that give us visibility into these. These lifecycle hooks can be implemented by the interfaces provided in the Angular Core Library. This is the same with components and directives. Every interface contains different lifecycle hook methods, named with the interface name prefixed with ng. Like the very commonly used lifecycle hook ngOnInit() is named as ng(prefix) and OnInit (interface name).

</details>


<details>
<summary>4 What is change detection ?</summary>

Change detection is the process through which angular checks to see whether your applications state has changed, and if any DOM needs to be update.

</details>


<details>
<summary>5 What is the use of ngOnChanges?</summary>

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

</details>


<details>
<summary>6 Difference between Constructor and ngOnInit ?</summary>

The Constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialisation of fields in the class and its subclasses. Angular, or better Dependency Injector (DI), analyses the constructor parameters and when it creates a new instance by calling new MyClass() it tries to find providers that match the types of the constructor parameters, resolves them and passes them to the constructor.

ngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the component.

</details>


<details>
<summary>7 What is the use of app root in Angular?</summary>

The root app module is just the beginning. It is a necessary part of any Angular app, but it is also just the entry point to the rest of your app's feature modules.

</details>


<details>
<summary>8 What is Ahead of Time (AOT) compiler ?</summary>

when you serve/build your angular application, the Ahead of Time compiler converts your code during the build time before your browser downloads and runs that code. From Angular 9, by default compiling option is set to true for ahead of time compiler.

</details>


<details>
<summary>9 What is the Just in Time (JIT) compiler ?</summary>

Just in time compiler provides compilation during the execution of the program at a run time before execution. In simple words, code get compiles when it’s needed, not at the build time. Initially, compiler was responsible for converting a high-level language into machine language, which would then be converted into executable code.
Just in time compiler, compiles code at runtime which means instead of interpreting byte code at build time, it will compile byte code when that component is called

</details>


<details>
<summary>10 What is the entry point of Angular application?</summary>

A bootstrapped component is an entry component that Angular loads into the DOM during the bootstrap process (application launch). Other entry components are loaded dynamically by other means, such as with the router. Angular loads a root AppComponent dynamically because it's listed by type in @NgModule. bootstrap .

</details>


<details>
<summary>11 What is TypeScript and why it is used?</summary>

TypeScript is a programming language first developed by Microsoft in 2012. Its main ambition is to improve the productivity of developing complex applications.
It is an open-source language developed as a superset of JavaScript. What this means in simple terms is that any code valid in JavaScript is also valuable for TypeScript.

### Example

**Without typescript**

```js
var x = 1
var y = 2
```

**With typescript**

```ts
var x: number = 1
var y: number = 2
```

</details>


<details>
<summary>12 What is destroy in Angular?</summary>

A lifecycle hook that is called when a directive, pipe, or component is destroyed. The ngOnDestroy or OnDestroy hook is called just before the Component/Directive instance is destroyed by Angular. Use this hook to Perform any cleanup logic for the Component. This is the correct place where you would like to Unsubscribe Observables and detach event handlers to avoid memory leaks.

</details>


<details>
<summary>13 What does bootstrapping in Angular mean?</summary>

Angular bootstrapping is the process of initializing the Angular application. It is the first step in the application's lifecycle. Angular application are mainly bootstrapped from `main.ts` file. This file is the entry point for the application and is responsible for bootstrapping the application.

</details>


<details>
<summary>14 What is NgModule ?</summary>

NgModule is kind of a manager for the application. It is responsible for registering all the components, directives, pipes, etc. that are part of this module context. A application can have multiple modules. Each module is responsible for registering its own components, directives, pipes, etc. The core module imports all the other modules.

**Example:**

```typescript
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    BrowserModule,
    ...
  ],
  providers: [
    ...
  ],
})
export class ExampleModule { }
```

**Note:** NgModule is a class that can be used to group components, directives, and pipes into an application and provide additional configuration options to those components.

</details>


<details>
<summary>15 What are exports in NgModule?</summary>

When we went to share some feature with another module, we declare it in the exports array of the NgModule. This can be used in the other module to import the feature.

**Parent module:**

```typescript
@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ]
})

export class ParentModule { }
```

We export the button component from the parent module. So now other modules can use this button component if they import the parent module.

**Child module:**

```typescript
@NgModule({
  imports: [
    ParentModule,
  ],
})
export class ChildModule { }
```

</details>


<details>
<summary>16 What are imports in NgModule?</summary>

When we need some feature from another module, We declare it in the imports array of the NgModule. Importing a module is a two-step process. First, we have to export the feature from the module we want to import. Second, we have to import the feature from the module we want to import.

**Parent module:**

```typescript
@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ]
})
export class ParentModule { }
```

**Child module:**

```typescript
@NgModule({
  imports: [
    ParentModule,
  ],
})
export class ChildModule { }
```

The above example first we export the ButtonComponent from the ParentModule and then we import it in the ChildModule. Now we can use the ButtonComponent in the ChildModules anywhere.

</details>


<details>
<summary>17 What is  declaration in Angular Module ?</summary>

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

</details>


<details>
<summary>18 What is angular markup ?</summary>

Angular markup is a way to write HTML in angular. It is a superset of HTML where we can modify HTML elements before the are displayed. For example, we can add custom attributes `loop` over an array of items and display them in a list `if else` condition etc.

**Example:**

```html
<ul>
  <li *ngFor="let item of items">
    {{item}}
  </li>
</ul>
<p *ngIf="items.length == 0">
  There are no items in the list.
</p>
```

</details>


<details>
<summary>19 What is providers in angular ?</summary>

Angular has an concept of services and services are used to share data between components and do external works like http requests and database connections. Providers has the all the services listed in the array.

**Note:** Providers are contain only services blueprint not the services instance.

**Example:**

```typescript
@NgModule({
  providers: [
    AuthService,
    UserService,
    AuthGuard
  ]
})
export class AppModule { }
```

</details>


<details>
<summary>20 What is injector in angular ?</summary>

Injector is a container that holds all the instances of the services. Mainly Responsible for creating the instances of the services and injecting them into the components or services.

</details>


<details>
<summary>21 How angular injector works ?</summary>

The Injector looks for the dependency in the Angular Providers using the Injection token. The Angular Providers array returns the Provider, which contains the information about how to create the instance of the dependency. The Injector creates the instance and injects it into the Component or service.

</details>


<details>
<summary>22 What is Components?</summary>

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

</details>


<details>
<summary>23 When is Angular Injector is created ?</summary>
The angular injector is created when the application is bootstrapped.

</details>


<details>
<summary>24 What is BrowserModule used for?</summary>

BrowserModule provides services that are essential to launch and run a browser app. BrowserModule also re-exports CommonModule from @angular/common, which means that components in the AppModule module also have access to the Angular directives every app needs, such as NgIf and NgFor.

</details>


<details>
<summary>25 How do you define a component styles?</summary>

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

</details>


<details>
<summary>26 How do you define a component template?</summary>

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

</details>


<details>
<summary>27 Why Use Property Binding?</summary>
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

</details>


<details>
<summary>28 What is Interpolation in angular ?</summary>


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

</details>
</details>


<details>
<summary>29 Why we need attribute binding in angular ?</summary>

If an attribute does't have corresponding DOM property then attribute binding are helpful to bind the attribute value to the DOM property.

```html
<table>
	<tr>
		<td [attr.colspan]="2">
			<span>Hello</span>
		</td>
	</tr>
</table>
```

</details>


<details>
<summary>30 What is event bind?</summary>

Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

**Example:**

```typescript
@Component({
	selector: 'my-app',
	template: ` <button (click)="onClick()">Click me</button> `,
})
export class AppComponent {
	onClick() {
		alert('Hello World!')
	}
}
```

</details>


<details>
<summary>31 Difference between One-way & Two-way Binding</summary>

In one-way binding, the flow is one-directional. In a two-way binding, the flow is two-directional. This means that the flow of code is from ts file to Html file. This means that the flow of code is from ts file to Html file as well as from Html file to ts file.

**One-way binding**

```ts
@Component({
	selector: 'my-app',
	template: `
		<input type="text" (keyup)="onKeyUp($event)" />
		<p>{{ values }}</p>
	`,
})
export class AppComponent {
	values = ''
	onKeyUp(e) {
		this.values += e.target.value
	}
}
```

**Two-way binding**

```ts
@Component({
	selector: 'my-app',
	template: `
		<input type="text" [(ngModel)]="name" />
		<p>Hello {{ name }}</p>
	`,
})
export class AppComponent {
	name = 'Angular'
}
```

</details>


<details>
<summary>32 What is a pipe</summary>

Pipes are a way to transform data in templates expressions before it is displayed. It's accepts data as input and returns transformed data as output.

**Example**

```ts
@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
	transform(value: any) {
		return value.split('').reverse().join('')
	}
}
```

```html
<p>{{ 'Hello' | reverse }}</p>
```

</details>


<details>
<summary>33 What Is Angular?</summary>

Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner.

</details>


<details>
<summary>34 What is structural directive and attribute directive in Angular?</summary>

Attribute directives. Change the appearance or behavior of an element, component, or another directive. Structural directives. Change the DOM layout by adding and removing DOM elements.

</details>


<details>
<summary>35 What is injector in angular ?</summary>

Injector are objects that are used to resolve dependencies. In angular a component when request a service it will be resolved by the injector. An injector is a kind of container that create service instance and provides them to the component.

_Note:_ A injector has an cache mechanism that prevent to create service instance multiple times. This is useful when a service is used in multiple components and provides the same instance to all of them (Singleton).

[Read more](https://angular.io/guide/dependency-injection)

</details>


<details>
<summary>36 What does @injectable decorator do?</summary>

Injectable decorator is used to mark a class as available to be injected as a dependency. It's help to use other classes as a dependency in services. With injectable decorator we can tell Angular to inject other classes as a dependency.

</details>


<details>
<summary>37 What is useClass in Angular?</summary>

`useClass` - this option is used to specify a class to be used for the service. The class must implement the `useClass` method.

```typescript
export class NewLogger {
	constructor() {
		console.log('NewLogger created')
	}
}

@Injectable()
export class Logger {
	constructor() {
		console.log('Logger created')
	}
}

@NgModule({
    providers: [
        { provide: Logger, useClass: NewLogger }
    ]
})
// Output:
// NewLogger created
```

The above example will create a new logger class instead of the default logger class. and provide it to the application through the DI.

</details>


<details>
<summary>38 What is useExisting in Angular?</summary>

The useExisting provider key lets you map one token to another. In effect, the first token is an alias for the service associated with the second token, creating two ways to access the same service object.

## Example

```typescript
;[
	NewLogger,
	// Alias OldLogger w/ reference to NewLogger
	{ provide: OldLogger, useExisting: NewLogger },
]
```

</details>


<details>
<summary>39 What is root in provider in Angular?</summary>

`@Injectable()` decorator provideIn root is used to define a service to be a part of root moduleInjector.

</details>


<details>
<summary>40 How we define a wildcard route in angular</summary>

We can define a wildcard route in our application by using the \*\* syntax. This is a special syntax that matches any path that is not defined in the application. It useful for showing a page that is not found.

**Example:**

```typescript
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
```

</details>


<details>
<summary>41 When should you use a router outlet?</summary>

When we have an nested route, we can use a router outlet to display the content of the nested route. The router outlet directive help us to maintain the multiple views or page in the same page.

</details>


<details>
<summary>42 What is Lazy Loading?</summary>

Lazy loading (also called on-demand loading) is an optimization technique for the content, be it a website or a web app.
Instead of loading the entire web page and rendering it to the user in one go as in bulk loading, the concept of lazy loading assists in loading only the required section and delays the remaining, until it is needed by the user.

</details>


<details>
<summary>43 What are Angular guards?</summary>

Angular route guards are interfaces provided by Angular which, when implemented, allow us to control the accessibility of a route based on conditions provided in class implementation of that interface. Here are some types of Angular guards: CanActivate, CanActivateChild, CanLoad, CanDeactivate and Resolve.

</details>


<details>
<summary>44 What are the core building block of angular</summary>

The various building blocks of Angular are:

- Components
- Modules
- Directives
- Decorators
- Pipes
- Data Binding
- Templates
- Metadata
- Services
- Dependency Injection

</details>


<details>
<summary>45 What is difference between CanActivate and canActivateChild?</summary>

```ts
const routes: Routes = [
  {
    path: "parent",
    component: ParentComponent,
    canActivateChild: [OnlyDigitsGuard],
    children: [...],
  },
];
```

- canActivate will only execute when the parent component is not yet created. For example, if we navigate to the parent route it will be called, if we then navigate to a child route it will not. If we directly navigate to the child route, the canActivate guard will also be executed.

- canActivateChild will always be executed while navigating to/between child routes. For example, if we're at a child route child/1 and we navigate to child/2, the guard will get executed. If we directly navigate to a child route, the guard will also get called. If we navigate to the parent route, the canActivateChild guard will not be fired.

- because canActivate is guarding the parent route, the child parameters (and data) are not available on the ActivatedRouteSnapshot of the canActivate guard. To be able to access the child parameters, we have to drill down the child components on the RouterStateSnapshot.

</details>


<details>
<summary>46 How many change detectors are in Angular?</summary>

Angular Provides two different ways to manage change detection. Default and onPush strategies.

**Default**: Check every component from the component tree from top to bottom every time an event triggers change detection on browser events, timers, XHRs, and promises.

**onPush**: With OnPush strategy skip checks for components that uses OnPush strategy and all of its child component. It's runs only when the input reference changed or an event from the component or one of it's child component triggers change detection.

</details>


<details>
<summary>47 What are the practical differences between template driven and Reactive forms?</summary>

- Template-driven forms make use of the "FormsModule", while reactive forms are based on "ReactiveFormsModule".
- Template-driven forms are asynchronous in nature, whereas Reactive forms are mostly synchronous.
- In a template-driven approach, most of the logic is driven from the template, whereas in reactive-driven approach, the logic resides mainly in the component or typescript code.

</details>


<details>
<summary>48 How many types of data binding are there in Angular?</summary>

Angular provides three categories of data binding according to the direction of data flow:

- From source to view
- From view to source
- In a two-way sequence of view to source to view

**Interpolation Property Attribute Class Style**
One-way from data source to view target. Use `[]` or `{{}}` to bind from source to view

```html
{{expression}} [target]="expression"
```

**Event**
One-way from view target to data source. Use `()` to bind from view to source.

```html
(target)="statement"
```

**Two-way**
Two-way. Use `[()]` to bind in a two way sequence of view to source to view

```html
[(target)]="expression"
```

</details>


<details>
<summary>49 What is a template variable?</summary>

Template variables use to pass data from one of a template in another part of the template. Just like variables in JavaScript or TypeScript code, template variables are scoped to the template that declares them.

</details>


<details>
<summary>50 What is use of ng-container in angular</summary>

ng-container allows us to create a division or section in a template without introducing a new HTML element. The ng-container does not render in the DOM, but content inside it is rendered. ng-container is not a directive, component, class, or interface, but just a syntax element. Container's content.

</details>


<details>
<summary>51 Difference between ng-container and ng-template tags</summary>

### ng-template

`ng-template` is used for the structural directive like ng-if, ng-for and ng-switch. If you use it without the structural directive, nothing happens and it will render.

**Example:**

```html
<ng-template>
	<div>Hi</div>
</ng-template>
```

There is nothing shown on the screen.

```html
<ng-template *ngIf="true">
	<div>Hi</div>
</ng-template>
```

This will show the div on the screen with the text "Hi".

### ng-container

`ng-container` is used to group elements. It is not rendered on the screen. It is used to group elements and apply directives to them.

**Example:**

```html
<ng-container *ngIf="true">
	<div>Hi Container</div>
</ng-container>
```

This will show the div on the screen with the text "Hi Container".

</details>


<details>
<summary>52 How does injection work in Angular?</summary>

Angular's Dependency Injection is based on providers, injectors, and tokens. Every Angular module has an injector associated with it. The injector is responsible to create the dependencies and inject them when needed. Dependencies are added to the injector using the providers property of the module metadata.

</details>


<details>
<summary>53 What do you mean by singleton design pattern?</summary>

It's a creational design pattern that ensures that at any given point in time there exists only a single instance of a class and provides a way to access it globally.

</details>


<details>
<summary>54 What are ways to create a singleton service in angular?</summary>

There are two ways to create a single service in angular that is by using -

- providedIn property
- NgModule providers arrays

</details>


<details>
<summary>55 Difference between Angular and AngularJS</summary>

Difference between the AngularJS & Angular: Although, there are significant key differences between Angular JS & Angular:

| AngularJS                                     | Angular                                                                           |
| --------------------------------------------- | --------------------------------------------------------------------------------- |
| It supports the Model-View-Controller design. | It uses components and directives. Components are the directives with a template. |
| Written in JavaScript                         | Written in TypeScript                                                             |
| Not a mobile friendly framework               | Angular is supported by all the popular mobile browsers.                          |
| It does not use Dependency Injection.         | It support Dependency Injection.                                                  |

</details>


<details>
<summary>56 What is RxJS used for?</summary>

Reactive Extensions for JavaScript, or RxJS, is a reactive library used to implement reactive programming to deal with async implementation, callbacks, and event-based programs. It can be used in your browser or with Node. js. RxJS observables allow you to publish events.

</details>


<details>
<summary>57 What is metadata?</summary>

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

</details>


<details>
<summary>58 How many lifecycle hooks are there in Angular?</summary>

Angular has 8 lifecycle hooks. They are:

1. ngOnChanges
2. ngDoCheck
3. ngOnInit
4. ngAfterContentInit
5. ngAfterContentChecked
6. ngAfterViewInit
7. ngAfterViewChecked
8. ngOnDestroy

</details>


<details>
<summary>59 Why do we use service in Angular?</summary>

Service is designed to encapsulate business logic and data with different components of Angular. It is basically a class that has a well-defined purpose to do something. You can create a service class for data or logic that is not associated with any specific view to share across components.

**Example**

```ts
@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor() {}
	getUsers() {
		return [
			{ id: 1, name: 'John' },
			{ id: 2, name: 'Doe' },
			{ id: 3, name: 'Smith' },
		]
	}
}
```

**Usage**

```ts
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	users: any[] = []

	constructor(private userService: UserService) {}

	ngOnInit() {
		this.users = this.userService.getUsers()
	}
}
```

</details>


<details>
<summary>60 What is the dependency injection?</summary>

Dependency injection is a design pattern that allows you to decouple dependencies from a class. DI patterns ask for dependencies from external sources rather than creating them. Angular uses DI to provide new instances of services or values to a class.

</details>


<details>
<summary>61 Where is async pipe used?</summary>

The async pipe is used to subscribe to an observable or promise and get the latest value it has emitted. It is mostly used with the HTTP service.

**Example**

```ts
@Component({
	selector: 'app-root',
	templateUrl: `
        <div *ngIf="data | async as users">
            <ul>
                <li *ngFor="let user of users">
                    {{ user.name }}
                </li>
            </ul>
        </div>
    `,
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	data: Observable<any>
	constructor(private http: HttpClient) {}
	ngOnInit() {
		this.data = this.http.get('https://jsonplaceholder.typicode.com/users')
	}
}
```

</details>


<details>
<summary>62 What is * ngFor directive used for?</summary>

The `*ngFor` directive is used to iterate over a collection. The directive is placed on a container element, which becomes the parent of the cloned templates.

The `*ngFor` expression is written in the form `let item of items`, where `items` is the collection to iterate over, and `item` is the current item in the collection.

**Example**

```ts
@Component({
	selector: 'app-root',
	template: `
		<ul>
			<li *ngFor="let item of items">{{ item }}</li>
		</ul>
	`,
})
export class AppComponent {
	items = ['item1', 'item2', 'item3']
}
```

</details>


<details>
<summary>63 What is custom pipe in Angular?</summary>

Create custom pipes to encapsulate transformations that are not provided with the built-in pipes. Then, use your custom pipe in template expressions, the same way you use built-in pipes—to transform input values to output values for display.

**Example**

The following example shows how to use a custom pipe to display a birthday date in a particular format.

```ts
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {
	transform(value: string, format: string): string {
		return formatDate(value, format, 'en-US')
	}
}
```

```ts
@Component({
	selector: 'app-root',
	template: ` <p>The birthday is {{ birthday | formatDate: 'MM/dd/yy' }}</p> `,
})
export class AppComponent {
	birthday = new Date(1988, 3, 15) // April 15, 1988
}
```

</details>


<details>
<summary>64 What are observables?</summary>

Observables are declarative which provide support for passing messages between publishers and subscribers in your application. They are used frequently in Angular and are the recommended technique for event handling, asynchronous programming, and handling multiple values.

**Example**

```ts
import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

@Component({
	selector: 'app-root',
	template: `
		<div *ngIf="data | async as users">
			<ul>
				<li *ngFor="let user of users">
					{{ user.name }}
				</li>
			</ul>
		</div>
	`,
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	data: Observable<any>
	constructor(private http: HttpClient) {}
	ngOnInit() {
		this.data = this.http.get('https://jsonplaceholder.typicode.com/users')
	}
}
```

</details>


<details>
<summary>65 What is the difference between promise and observable?</summary>

| Promise                                    | Observable                                   |
| ------------------------------------------ | -------------------------------------------- |
| Promise are eager                          | Observable are lazy                          |
| Promise produce a single value or an error | Observable produce multiple values over time |

</details>


<details>
<summary>66 What are templates in Angular</summary>

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

</details>


<details>
<summary>67 How to create observable from promise</summary>

Use the `from` operator to convert a promise to an observable.

```ts
import { from } from 'rxjs'

const promise = new Promise((resolve) => {
	setTimeout(() => {
		resolve('Hello from promise!')
	}, 1000)
})

const observable = from(promise)

observable.subscribe((x) => console.log(x))
```

</details>


<details>
<summary>68 What is router in Angular?</summary>

Angular router can interpret a browser URL as an instruction to navigate to a client-generated view. It can pass optional parameters along to the supporting view component that help it decide what specific content to present. You can bind the router to links on a page, and it will navigate to the appropriate application view when the user clicks a link.

</details>


<details>
<summary>69 What is the use of DomSanitizer?</summary>

DomSanitizer helps prevent Cross Site Scripting Security bugs (XSS) by sanitizing values to be safe to use in the different DOM contexts.

**Example**

```ts
import { Component } from '@angular/core'

@Component({
	selector: 'my-app',
	template: `
		<h1>DomSanitizer Example</h1>
		<p>Safe HTML: {{ safeHtml }}</p>
		<p>Safe Style: {{ safeStyle }}</p>
		<p>Safe Script: {{ safeScript }}</p>
		<p>Safe Url: {{ safeUrl }}</p>
		<p>Safe Resource Url: {{ safeResourceUrl }}</p>
	`,
})
export class AppComponent {
	safeHtml: string
	safeStyle: string
	safeScript: string
	safeUrl: string
	safeResourceUrl: string

	constructor(private sanitizer: DomSanitizer) {
		this.safeHtml = sanitizer.bypassSecurityTrustHtml(
			'<script>alert("Hi there")</script>'
		)
		this.safeStyle = sanitizer.bypassSecurityTrustStyle('background: red')
		this.safeScript = sanitizer.bypassSecurityTrustScript('alert("Hi there")')
		this.safeUrl = sanitizer.bypassSecurityTrustUrl(
			'javascript:alert("Hi there")'
		)
		this.safeResourceUrl = sanitizer.bypassSecurityTrustResourceUrl(
			'javascript:alert("Hi there")'
		)
	}
}
```

</details>


<details>
<summary>70 What is rendering engine in Angular?</summary>

Angular view engine takes the templates and components we've written and translates them into regular HTML and JavaScript that the browser can read and display.

</details>


<details>
<summary>71 What is a ViewChild Angular?</summary>

ViewChild is a decorator that allows you to access the DOM element or the component instance of the element to which it is attached. It is used to get a reference to the element or the component instance in the template.

## Example

```ts
import { Component, ViewChild } from '@angular/core'
@Component({
	selector: 'app-child',
	template: `<p #childElement>child works!</p>`,
})
export class ChildComponent {
	@ViewChild('childElement') childElement: ElementRef

	ngAfterViewInit() {
		console.log(this.childElement.nativeElement)
	}
}
```

</details>


<details>
<summary>72 What is HTTP interceptors in Angular?</summary>

HTTP Interceptors is a special type of angular service that we can implement. It's used to apply custom logic to the central point between the client-side and server-side outgoing/incoming HTTP request and response.

</details>


<details>
<summary>73 Why is Node.js required for Angular?</summary>

Angular does not require Node.js directly. However, Angular CLI does require Node.js. Angular CLI is a command-line interface tool that we use to initialize, develop, scaffold, and maintain Angular applications. For example:

- npm (node package manager) comes with Node.js by default and it allows you to manage your dependencies. So, you don’t have to worry about operations like adding a dependency, removing some, or updating your package.json.
- npm gives you angular CLI or ng CLI (angular command-line interface) which is a great tool for building your application easily
- Node.js allows you to spin up a lightweight web server to host your application locally in your system.

</details>


<details>
<summary>74 What is the purpose of shared modules</summary>

Creating shared modules allows you to organize and streamline your code. You can put commonly used directives, pipes, and components into one module and then import just that module wherever you need it in other parts of your application.

</details>


<details>
<summary>75 What Is property binding in angular ?</summary>

Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button functionality, set paths programmatically, and share values between components.

**Example of Angular property binding**

```ts
@Component({
	selector: 'my-app',
	template: ` <img [src]="imageUrl" /> `,
})
export class AppComponent {
	imageUrl = 'https://picsum.photos/200/300'
}
```

The above code creates an Angular component that displays an image. The image's source is set to the value of the imageUrl property in the DOM node. A target property is the property of the DOM node that is set to the value of the imageUrl property.

</details>


<details>
<summary>76 What is the difference between properties and attributes in HTML?</summary>

When writing HTML source code, you can define attributes on your HTML elements. Then, once the browser parses your code, a corresponding DOM node will be created. This node is an object, and therefore it has properties.

For instance, this HTML element:

```html
<input type="text" name="name" />
```

Has 2 attributes `(type and value)`.
Once the browser parses this code, a HTMLInputElement object will be created, and this object will contain dozens of properties like: accept, accessKey, align, alt, attributes, autofocus, baseURI, checked, childElementCount, childNodes, children, classList, className, clientHeight, etc.

</details>


