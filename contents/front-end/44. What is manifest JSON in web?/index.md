---
title: What is manifest JSON in web?
source: https://web.dev/add-manifest
---

The web app manifest is a JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device.

**Example**

```json
{
	"name": "Weather",
	"short_name": "Weather",
	"start_url": "/?source=pwa",
	"display": "standalone",
	"theme_color": "#2f3ba2",
	"background_color": "#2f3ba2"
}
```

Here we have a manifest file for a weather app. It has a name, a short name, a start URL, a display mode, a theme color, and a background color. now it's can getting appearance depending on the manifest file.
