---
title: What is destroy in Angular?
source: https://angular.io
---

A lifecycle hook that is called when a directive, pipe, or component is destroyed. The ngOnDestroy or OnDestroy hook is called just before the Component/Directive instance is destroyed by Angular. Use this hook to Perform any cleanup logic for the Component. This is the correct place where you would like to Unsubscribe Observables and detach event handlers to avoid memory leaks.
