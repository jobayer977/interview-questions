---
title: What is type assertion?
source: https://www.geeksforgeeks.org/
---

 Type assertions enable you to override default type inference for neutral types. Type assertion is a technique that informs the compiler about the type of a variable. Type assertion is similar to typecasting but it doesn’t reconstruct code. You can use type assertion to specify a value’s type and tell the compiler not to deduce it. When we want to change a variable from one type to another such as any to number etc, we use Type assertion.

**Example**

```typescript

let str: unknown = "Typescript";
console.log(str);
  
let len: number = (str as string).length;
console.log(len);             
                        
```
