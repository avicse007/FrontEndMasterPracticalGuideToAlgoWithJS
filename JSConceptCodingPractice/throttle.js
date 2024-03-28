/*
Let's break down the code:

function throttle(func, delay) {
----------------------------------
This declares a function named throttle that takes two parameters:
func: The function to be throttled.
delay: The time interval (in milliseconds) for which the function should be 
throttled.

let lastExecutionTime = 0;
----------------------------------
Initializes a variable lastExecutionTime to keep track of the timestamp when 
the throttled function was last executed.

let timeoutId;
----------------------------------
Declares a variable timeoutId to store the identifier returned by setTimeout. 
This identifier is later used to clear the timeout if the throttled function 
is re-invoked within the specified delay.

return function (...args) {
----------------------------------
Returns an anonymous function that takes any number of arguments using the 
rest parameter (...args).

const now = Date.now();
----------------------------------
Gets the current timestamp using Date.now().

if (now - lastExecutionTime >= delay) {
--------------------------------------------
Checks if enough time has passed since the last execution of the throttled 
function. If true, the function can be executed immediately.
clearTimeout(timeoutId);
--------------------------------------------
Clears any existing timeout to ensure that the throttled function is not 
executed after this point.
func.apply(this, args);
--------------------------------------------
Invokes the original function (func) with the specified arguments (args).
The apply method is used to set the correct context (this) and pass the arguments.
lastExecutionTime = now;
--------------------------------------------
Updates lastExecutionTime to the current timestamp.
} else {
--------------------------------------------
If not enough time has passed, set a new timeout to delay the execution of 
the function.
clearTimeout(timeoutId);
--------------------------------------------
Clears any existing timeout.
timeoutId = setTimeout(() => {
--------------------------------------------
Sets a new timeout using setTimeout.
func.apply(this, args);
--------------------------------------------
Invokes the original function after the specified delay.
lastExecutionTime = now;
--------------------------------------------
Updates lastExecutionTime to the current timestamp.
}, delay - (now - lastExecutionTime));
--------------------------------------------
Adjusts the timeout delay based on the time remaining until the next 
allowed execution.
};

Closes the anonymous function and the throttle function.
This throttle function ensures that the original function is executed at 
most once within the specified time interval (delay). If the function is 
called more frequently, it delays execution until the next available interval.

*/

function throttle(func, delay) {
  let lastExecutionTime = 0;
  let timeoutId;

  return function (...args) {
    const now = Date.now();

    if (now - lastExecutionTime >= delay) {
      clearTimeout(timeoutId);
      func.apply(this, args);
      lastExecutionTime = now;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecutionTime = now;
      }, delay - (now - lastExecutionTime));
    }
  };
}
