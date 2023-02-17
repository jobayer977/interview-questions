---
title: What is NgModule ?
source: https://angular.io
---

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
