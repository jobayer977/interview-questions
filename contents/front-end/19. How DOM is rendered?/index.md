---
title: How DOM is rendered?
source: https://developer.mozilla.org/en-US/
---

When a web page is loaded, the browser first reads the HTML text and constructs DOM Tree from it. Then it processes the CSS whether that is inline, embedded, or external CSS and constructs the CSSOM Tree from it. After these trees are constructed, then it constructs the Render-Tree from it. A Render-Tree is a tree of Render-Nodes that represents the final output of the page.
