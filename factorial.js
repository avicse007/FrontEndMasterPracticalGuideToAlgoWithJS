// @ts-nocheck
const factorial = (n,cache) => {
    cache[0]=1;    
    if (n === 0) {
        cache[n];
    }
    if (cache[n-1]) {
         cache[n] = n * cache[n-1];
        return cache[n];
    }
    cache[n] = n * factorial(n - 1,cache);
    return cache[n];
}
const input = 21;
const now = new Date().getTime();
console.log(`Start time: ${new Date().toLocaleTimeString()}`);
const ans = factorial(input,[]); //51090942171709440000
const done = new Date().getTime();
console.log(`fact of ${input} is ${ans}`);
console.log(` Time: taken is ${done - now} ms`);