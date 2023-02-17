---
title: Difference between Constructor and ngOnInit ?
source: https://angular.io
---

The Constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialisation of fields in the class and its subclasses. Angular, or better Dependency Injector (DI), analyses the constructor parameters and when it creates a new instance by calling new MyClass() it tries to find providers that match the types of the constructor parameters, resolves them and passes them to the constructor.

ngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the component.
