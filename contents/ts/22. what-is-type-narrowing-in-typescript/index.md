---
title: what is type narrowing in typescript
source: https://formidable.com/
---

Type narrowing is just what it sounds like—narrowing down a general type into something more precise. If you've ever dealt with union types, e.g. string | number you've certainly encountered this. In fact, optional types such as x?: number often require narrowing as well, as this typing is equivalent to x: number | undefined. In both of these cases, you'll likely need to handle each case in your code, and for that you'll need to narrow down the type first.

**Ways to Narrow These Types**
To narrow a union type down to one, we'll need to consider each case. We can do this with good old-fashioned control flow in JavaScript, as the TypeScript compiler is clever enough to infer the narrowing from our conditional logic. Typically, this just means using if or switch statements.

Let's consider a common, real-world example that I'm sure you've all written once or twice: a function that returns the deliciousness score for a given type of candy.

```typescript
type Candy =
  | { name: "Skittles"; type: "Regular" | "Tropical" }
  | { name: "Black Licorice"; qty: number }
  | { name: "Runts"; isBanana: boolean };

function rateCandy(candy: Candy): number {
  switch (candy.name) {
    case "Skittles":
      return candy.type === "Regular" ? 8 : 7;
    case "Black Licorice":
      return candy.qty * -1;
    case "Runts":
      return candy.isBanana ? 11 : 5;
    default:
      throw new Error(`"${candy}" is not a valid candy!`);
  }
}
```
