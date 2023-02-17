---
title: Differences Between Type Aliases and Interfaces?
source: https://www.typescriptlang.org
---
Type aliases and interfaces are similar but not the same. The key difference is that interfaces are extensible whereas type aliases are not. Type aliases are used to create a new type that is a subset of an existing type. Interfaces are used to create a new type that is a superset of an existing type.

**Extending an interface**

```typescript
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
        
```

**Extending a type via intersections**

```typescript
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
        
```
