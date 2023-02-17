---
title: What is injector in angular ?
source: https://angular.io
---

Injector are objects that are used to resolve dependencies. In angular a component when request a service it will be resolved by the injector. An injector is a kind of container that create service instance and provides them to the component.

_Note:_ A injector has an cache mechanism that prevent to create service instance multiple times. This is useful when a service is used in multiple components and provides the same instance to all of them (Singleton).

[Read more](https://angular.io/guide/dependency-injection)
