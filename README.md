# qu_challenge

Web Developer Challenge for QU
By Carolina Bottino

### Technologies

- Vue 3
- TypeScript
- Vite

### Recommended IDE

- VS Code

### Questions asked...

1. What's a closure? Where in the code is there a closure?

The term closure comes from the fact that a piece of code (block, function) can have free variables that are closed (i.e. bound to a value) by the environment in which the block of code is defined. A closure is basically a function or code block that can access non-local values through its free variables after these have been bound by the context.

An example of closure can be found in function sortMethods(), inside Planets.vue page.

2. Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?

A function is said to have a side effect if it modifies some state variable value(s) outside its local environment, which is to say if it has any observable effect other than its primary effect of returning a value to the invoker of the operation.

The function sort(), which is called when you click on any of headers in table, is a case of a side-effect function. In this case, this side-effects are expected because they happen to be the objective of the function.
