---
title: What is providers in angular ?
source: https://youtube.com
---

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
