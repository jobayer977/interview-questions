---
title: How we define a wildcard route in angular
source: https://angular.io/guide/router
---

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
