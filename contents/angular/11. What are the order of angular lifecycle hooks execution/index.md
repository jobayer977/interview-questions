---
title: What are the order of angular lifecycle hooks execution ?
source: https://angular.io
---

Angular gives us 8 hooks to allow us to tap into the lifecycle of our components and trigger actions at specific points in the lifecycle.

Here are the lifecycle hooks available , in the order which they are invoked:

1. ngOnChanges
2. ngOnInit
3. ngDoCheck
4. ngAfterContentInit
5. ngAfterContentChecked
6. ngAfterViewInit
7. ngAfterViewChecked
8. ngOnDestroy

**ngOnChanges** Called every time a data-bound input property changes. It’s called a first time before the ngOnInit hook. The hook receives a SimpleChanges object that contains the previous and current values for the data-bound inputs properties. This hook gets called often, so it’s a good idea to limit the amount of processing it does.

**ngOnInit** Called once upon initialization of the component.

**ngDoCheck** Use this hook instead of ngOnChanges for changes that Angular doesn’t detect. It gets called at every change detection cycle, so keeping what it does to a minimum is important for performance.

**ngAfterContentInit** Called after content is projected in the component.

**ngAfterContentChecked** Called after the projected content is checked.

**ngAfterViewInit** Called after a component’s view or child view is initialized.

**ngAfterViewChecked** Called after a component’s view or child view is checked.

**ngOnDestroy** Called once when the component is destroyed and a good hook to use to cleanup and unsubscribe from observables.
