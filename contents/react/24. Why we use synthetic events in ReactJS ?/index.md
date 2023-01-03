---
title: Why we use synthetic events in ReactJS ?
source: https://www.geeksforgeeks.org
---

Different browsers where the same event has different names. Here wrapper does is triggering all the different names for the same event effect. Therefore, whenever we are triggering an event in a ReactJS, we are not actually trying to trigger the real DOM event, instead, we are using the ReactJS custom event type, which is the synthetic event.

The examples of the synthetic events are onClick(), onBlur() and onChange(). These all are not real DOM events but react synthetic events.
