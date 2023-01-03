---
title: Why do we use unit testing?
source: https://developer.mozilla.org/en-US/
---

Unit test provide a way to test small units of code independently of the larger system. This is useful to check that an application is meeting its requirements, and to ensure that the code is working as expected.

**Benefits of unit testing:**

 1. It is a good way to test small units of code independently of the larger system.
 2. Increases code readability.
 3. improve deployment velocity.

**Examples of Init testing in JS:**

```javascript
const sum = (a, b) => a + b;
describe('sum', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
}
```
