---
title: What are the benefit of event delegation?
---

Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

- No need to add many handlers.
- When adding or removing elements, no need to add/remove handlers.
