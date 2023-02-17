---
title: What is the difference between DOM and BOM?
questions:
  [
    {
      question: 'What is the Browser Object Model?',
      answer: ['HTML', 'BOM', 'DOM', 'BOMB'],
      correctAnswer: 'BOM'
    }
  ]
---

They're just different objects you're dealing with:

**DOM**

The DOM is the **Document object model** which is deals with the document, the HTML elements themselves, e.g `document` and all traversal you would do in it, events, etc.

**BOM**

The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, navigator and screen (as well as some others that vary by browser).

| BOM                                                                               | DOM                                                      |
| --------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Is Browser Object Model                                                           | Is Document Object Model                                 |
| Used for access and manipulation of the browser window                            | Used to manipulate the HTML document.                    |
| No standard set of rules, each browser has its own standards for implementing BOM | Has a set standard of rules to be used across documents. |
