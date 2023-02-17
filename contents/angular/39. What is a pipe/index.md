---
title: What is a pipe
source: https://angular.io
---

Pipes are a way to transform data in templates expressions before it is displayed. It's accepts data as input and returns transformed data as output.

**Example**

```ts
@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
	transform(value: any) {
		return value.split('').reverse().join('')
	}
}
```

```html
<p>{{ 'Hello' | reverse }}</p>
```
