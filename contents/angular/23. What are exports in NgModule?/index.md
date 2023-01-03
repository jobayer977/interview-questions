---
title: What are exports in NgModule?
source: https://angular.io
---

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
