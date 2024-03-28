// @ts-nocheck
const memoizeFN = (fn) => {
    const cache = {};
    return (...args) => {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn(...args);
        cache[args] = result;
        return result;
    }
}

const fact =  n => {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
}
const now = new Date().getTime();
const memoizedFact1 = memoizeFN(fact);
const input = 21;
const ans = memoizedFact1(input); //51090942171709440000
const done = new Date().getTime();
console.log(`fact of ${input} is ${ans}`);
console.log(` ${done}-${now} Time: taken is ${done - now} ms`);