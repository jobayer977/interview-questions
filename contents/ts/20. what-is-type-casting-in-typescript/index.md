---
title: What is type casting in typescript
source: https://www.delftstack.com/howto/typescript/casting-a-number-to-string-in-typescript/
---

Type casting means changing an expression from one data type to another.

TypeScript is compiled to JavaScript and behaves differently; it does not give two hoots about the types defined by you, and there is no runtime to enforce types during the execution.

Example

```typescript

let data: string = '123';
console.log("Type of Data before Type Cast==>", typeof data);
console.log("Type of Data after Type Cast==>", typeof Number(data));

```
