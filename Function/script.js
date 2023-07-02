// Function

/*
    Definitions: 
    1. Quite often we need to perform a similar action in many places of the script.
    2. Function are the main "building blocks" of the program. They allow the code to called many times without repetition.
*/

// Function Declaration

function showMessage(){
    console.log("hello");
}

// Local variables:=> A local variable declared inside a function is only visible inside the function.
function showMessage(){
    let message = "Hello,  I am javascript"; // local variable
    console.log(message);
}
showMessage();
console.log(message) // error becoz variable is local to the function

// Outer variables: A function can access an outer variable as well, for example:
// A function has a full access to the outer variable

// let userName = 'John';
// function showMessage(){
//     let message = 'hello,' + userName;
//     console.log(message);
// }

// showMessage(); //  hello, john

// the outer variable is only used if there's no local one.
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function

// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

// Global variables
// Variables declared outside of any function, such as the outer userName in the code above, are called global.
// Global variables are visible from any function (unless shadowed by locals).

// Parameters:
//we can pass arbitrary data to the functions using parameters.
function showMessage(from, text) { // parameters: from, text
    console.log(from + ":" + text);
}
showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// when a value is passed as a function parameters, its also called an argument.
// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
// An argument is the value that is passed to the function when it is called (it’s a call time term).

// Default values:
// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

/*
Function Expression vs Function Declaration:
    Function Declaration: a function, declared as a separate statement, in the main code flow:
    Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:
*/
 // function Declaration

//  function sum(a,b){
//     return a+b;
//  }
// // function Expression
// let sum = function(a,b){
//     return a+b;
// }

/*
Callback function:
    A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/ 


// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
  
//   processUserInput(greeting);



/*
    Asynchronous:
    The term asynchronous refers to two or more objects or events not existing or happening at the same time (or multiple related things happening without waiting for the previous one to complete). 
    In computing, the word "asynchronous" is used in two major contexts.
*/


//-------------------------------------------------------------------


// Arrow functions
// This creates a function func that accepts arguments arg1..argN, 
// then evaluates the expression on the right side with their use and returns its result.
// let func = (arg1, arg2, ..., argN) => expression;

// let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

// alert( sum(1, 2) ); // 3

// // 2
// let double = n => n*2;
// console.log(double(3))

// let sayHi = () => console.log("Hello");

// sayHi();

// 
// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert('Hello!') :
//   () => alert("Greetings!");

// welcome();

// multiline arrow function

let sum = (a,b) =>{
    let result = a+b;
    return result;
}
console.log(sum(1,2))


// Normal function and Arrow Function




console.log("-------normal function vs Arrow function-----");
// var a= 100;
// var b= 99;

// let obj = {
//     a:10,
//     b:function(){
//         // context -> this -> obj
//         console.log(this.a);
//         console.log(this);
//     },
//     c: () =>{
//         console.log(this.a);
//         console.log(this);
//     }

// }

// obj.b() // callsite
// obj.c(); // 100

// 1. there is no concept of Context inside the Arrow function
// 2. this inside the arrow function is nothing but the parents Context

/*
    Arguments
*/

// function abc(a,b){
//     // this
//     const arg = arguments

//     // arguments[0]

//     console.log(arg, arg[0], arg[1]);
// }
// abc(100, 299)

// -> Arguments inside the Arrow function doesn't have vaitage.

const abc = (a,b) =>{
    const arg = arguments;
    console.log(arg, arg[0], arg[1])
}

abc(1,2)

// sum(1,2) -> default
// obj.sum(1,2) => implicite binding
// sum.call(this, 1, 2)// explicit binding
// new sum(1,2) -> new