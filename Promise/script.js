// JavaScript Promises are a powerful feature that allow you to handle asynchronous operations in a more organized and readable way. They provide a structured approach to dealing with asynchronous tasks and help prevent callback hell.
// asynchronous operations means:
// Asynchronous operations are tasks or operations in a program that can run independently without blocking the execution of other tasks.
// Here's a simple example to illustrate how Promises work:

// // Create a new Promise
const myPromise = new Promise((resolve, reject) => {
//  // Simulating an asynchronous task
 setTimeout(() => {
  const data = "Promise resolved successfully!";
  resolve(data); // Promise is fulfilled
 }, 2000);
});

// // Using the Promise
myPromise
 .then((result) => {
  console.log(result);
  // Do something with the resolved data
 })
 .catch((error) => {
  console.log(error);
  // Handle any errors that occur
 });


// In the above code, we create a Promise that simulates an asynchronous task using `setTimeout`. After 2 seconds, the Promise resolves with the message "Promise resolved successfully!".
// We can then chain `.then()` and `.catch()` methods to handle the resolved value or any potential errors respectively.
// Promises provide a clean and sequential way to handle asynchronous operations, making your code more maintainable and easier to understand.