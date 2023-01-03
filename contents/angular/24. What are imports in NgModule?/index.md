---
title: What are imports in NgModule?
source: https://angular.io
---

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
