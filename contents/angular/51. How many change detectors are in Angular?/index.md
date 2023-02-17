---
title: How many change detectors are in Angular?
source: https://angular.io
---

Angular Provides two different ways to manage change detection. Default and onPush strategies.

**Default**: Check every component from the component tree from top to bottom every time an event triggers change detection on browser events, timers, XHRs, and promises.

**onPush**: With OnPush strategy skip checks for components that uses OnPush strategy and all of its child component. It's runs only when the input reference changed or an event from the component or one of it's child component triggers change detection.
