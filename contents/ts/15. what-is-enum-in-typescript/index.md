---
title: what is enum in typescript
source: https://www.digitalocean.com/community/tutorials/how-to-use-enums-in-typescript
---
In TypeScript, enums, or enumerated types, are data structures of constant length that hold a set of constant values. Each of these constant values is known as a member of the enum. Enums are useful when setting properties or values that can only be a certain number of possible values.

```typescript
enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  console.log(recipient, message); // "Princess Caroline",  1
}

respond("Princess Caroline", UserResponse.Yes);

```
