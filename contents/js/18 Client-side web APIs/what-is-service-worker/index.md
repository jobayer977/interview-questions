---
title: What is Service Worker ?
---

A service worker is a script that runs independently in the browser background. On the user side, it can intercept its network requests and decide what to load (fetch).
Service workers mainly serve features like background sync, push notifications and they are commonly used for’offline first’ applications, giving the developers the opportunity to take complete control over the user experience.

- **You can dominate Network Traffic!**
  You can manage all network traffic of the page and do any manipulations.
  Is it really possible to dominate all network traffic? Yes! For example, when the page requests to a CSS file, you can send plain text as a response or when the page requests to an HTML file, you can send png file as a response. Of course, you can send true response too :)

- **You can “Cache”!**
  You can cache any request/response pair with Service Worker and Cache API and you can access these offline content anytime

- **You can manage Push Notifications!**
  You can manage push notifications with Service Worker and show any information message to the user

- **You can continue!**
  Although Internet connection is broken, you can start any process with Background Sync of Service Worker
