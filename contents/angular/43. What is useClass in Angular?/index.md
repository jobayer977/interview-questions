---
title: What is useClass in Angular?
source: https://angular.io
---

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
