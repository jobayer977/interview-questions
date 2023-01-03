---
title: How does injection work in Angular?
source: https://angular.io
---

Angular's Dependency Injection is based on providers, injectors, and tokens. Every Angular module has an injector associated with it. The injector is responsible to create the dependencies and inject them when needed. Dependencies are added to the injector using the providers property of the module metadata.
