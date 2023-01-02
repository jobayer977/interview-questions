---
title: How Prototype inheretated with Object.create() ?
---

`Object.create()` Inherit prototypes from the targeted object and create a new object. the first parameter is for targeted object prototypes and the second parameter is for property descriptors (optional).

```js
const extractJSON = {
	extractProperties: function () {
		let properties = [];
		for (let key in this) {
			if (this.hasOwnProperty(key)) {
				properties.push(key);
			}
		}
		return properties;
	},
	extractValues: function () {
		let values = [];
		for (let key in this) {
			if (this.hasOwnProperty(key)) {
				values.push(this[key]);
			}
		}
		return values;
	}
};
const userInfoProperties = Object.create(extractJSON);
userInfoProperties.name = 'John';
userInfoProperties.age = 30;
userInfoProperties.extractProperties(); //   ['name', 'age']
userInfoProperties.extractValues(); //   ['John', 30]
```
