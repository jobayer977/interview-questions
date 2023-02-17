---
title: How to Scoping variables in JavaScript switch statement?
---

when you declare variable in case statements, they would hoisted to the switch statement. I would show you a very simple way to make sure the variables you declare in your case statements can only be accessed from that block.

One important point to remember is that each case statement is not a block. Variables declared anywhere within the switch statement is locally scoped to the switch statement.

```js
    let number  = 2;

    switch (number) {
        case 1:
            let message = "first number";
            console.log(message)
            break;
        case 2:
            let message = "second number";
            console.log(message)
            break;
    case 3:
            let message = "third number";
            console.log(message)
            break;
        default
            let message = "second number";
            console.log(message)
            break;
    }

    //This throws a syntax error: identifier "message"
    //has already been declared
```

There are cases where you might need yo hold different variable values in each of the case statements. It's possible to keep a variable scoped to the case statement. There's a very easy fix for this, Let's solve this

```js
    let number  = 2;

    switch (number) {
        case 1: { // braces make the case statement a block
            let message = "number" + number; // this remains in this block
            console.log(message)
            break;
        }
        case 2: {
            let message =  "number" + number; // this is a valid syntax
            console.log(message)
            break;
        }
        case 3: {
            let message = "number" + number;
            console.log(message)
            break;
        }
        default
            let message =  "number" + number;
            console.log(message)
            break;
    }
```

By wrapping a block in braces, any variable declared within that block is only visible within the block,and is garbage collected once the block ends.

With this syntax, each of these variables are declared within a block, scoped away from each other. They can only be accessed from within the case scope and thrown away once the block ends.

[Reference](https://dev.to/robogeek95/scoping-variables-in-the-switch-statement-1gig)
