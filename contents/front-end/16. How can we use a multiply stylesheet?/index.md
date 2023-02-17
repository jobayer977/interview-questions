---
title: How can we use a multiply stylesheet?
source: https://h5bp.org/
---

Handling multiple stylesheets is a common problem in web development. The solution is to use a single stylesheet that contains all of the rules for the different stylesheets. This can be done by combining all of the stylesheets into one stylesheet using a bundler like [Bower](http://bower.io/). or [Gulp](http://gulpjs.com/). Also, we can use the `@import` directive to import the stylesheets.

```css
@import "reset";
@import "base";
@import "layout";
@import "typography";
```
