---
title: What is difference between CanActivate and canActivateChild?
source: https://timdeschryver.dev/blog/the-difference-between-the-canactivate-and-canactivatechild-guards#nice-to-knows
---

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
