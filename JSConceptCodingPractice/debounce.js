/*
This is a function declaration named debounce that takes two parameters:
func: The function to be debounced.
delay: The time (in milliseconds) to wait before invoking the debounced function.
*/
function debounce(func, delay) {
  /*
    Declare a variable timeoutId to store the identifier returned by setTimeout.
    This identifier is later used to clear the timeout if the debounced 
    function is re-invoked within the specified delay.
    */
  let timeoutId;
  /*
    Return an anonymous function that takes any number of arguments using 
    the rest parameter (...args).
    */
  return function (...args) {
    /*
    Clear the existing timeout if it exists. This ensures that the debounced 
    function is not executed if it's re-invoked within the delay period.
    */
    clearTimeout(timeoutId);
    /*
    Set a new timeout using setTimeout.The callback function inside 
    setTimeout will be invoked after the specified delay period.
    */
    timeoutId = setTimeout(() => {
      /*
    Invoke the original function (func) using apply to pass the 
    correct context (this) and arguments (args).
    */
      func.apply(this, args);
    }, delay);
  };
}

/*=================================*/
// Example usage
/*=================================*/
// Example usage
function handleResize(event) {
  console.log("Handling resize:", event);
}

const debouncedResizeHandler = debounce(handleResize, 300);

// Attach the debounced handler to the window resize event
window.addEventListener("resize", debouncedResizeHandler);