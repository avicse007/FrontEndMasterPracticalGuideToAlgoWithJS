// @ts-nocheck
const curryUsingBind = (fn) => {
  return (curryFn = (...args) => {
    console.log(`args.length:${args.length} and fn.length:${fn.length}`);
    console.log(`args: ${args}`);
    if (fn.length !== args.length) {
      return curryFn.bind(null, ...args);
    }
    return fn(...args);
  });
};

function curryUsingRecursion(fn, ...args) {
  console.log(`fn.length ${fn.length} args.length ${args.length}`);
  return fn.length <= args.length
    ? fn(...args) // If all the args needed for the fn is available run it.
    : (...nextArgs) => curryUsingRecursion(fn, ...args, ...nextArgs);
  //Else pass the nextSet of Args to new curried function with original function
}

const sum = (a, b, c, d, e, f) => a + b + c + d + e + f;

const curriedSum = curryUsingBind(sum);
console.log(`curriedSum: ${curriedSum}`);
const sum1 = curriedSum(1);
console.log(`sum1: ${sum1}`);
const sum23 = sum1(2, 3);
console.log(`sum23: ${sum23}`);
const sum456 = sum23(4, 5, 6);
console.log(`sum456: ${sum456}`);

console.log(`=========Recursion==================`);

const curriedSumR = curryUsingRecursion(sum);
console.log(`curriedSumR: ${curriedSumR}`);
const sum1R = curriedSumR(1);
console.log(`sum1R: ${sum1R}`);
const sum23R = sum1R(2, 3);
console.log(`sum23R: ${sum23R}`);
const sum456R = sum23R(4, 5, 6);
console.log(`sum456R: ${sum456R}`);
