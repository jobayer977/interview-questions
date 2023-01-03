---
title: How many resources will a browser download from a given domain at a time?
source: https://developer.mozilla.org/en-US/
---

It depends on the browser and how it is setup - firefox has controls for how many download threads to use, for example.
The different browsers (and versions) have different defaults as well.

IE7 allowed only two concurrent connections per host. But most browsers today allow more than that. IE8 allows 6 concurrent connections, Chrome allows 6, and Firefox allows 8.
