// An empty object (“empty cabinet”) can be created using one of two syntaxes:

// let user = new Object(); // "object constructor" syntax
// let user1 = {} // "object literal" syntax

// the figure brackets {...} are used. That declaration is called an object literal.

// Literals and properties

// let user = {      // an object
//     name:"Avanish", // by key "name" store value "Avanish"
//     age:30          // by key "age" store value 30
// };

// We can add, remove and read files from it at any time.

// Property values are accessible using the dot notation:
// // get property values of the object:
// alert(user.name); // Avanish
// alert(user.age); // 30

// The value can be of any type. Let’s add a boolean one:
// user.isAdmin = true;

// To remove a property, we can use the delete operator:

// delete user.age;

// multiword property

// let user = {
//     name: "avanish",
//     age: 25,
//     "likes birds": true // multiword property name must be quoted

// }

// this would give a syntax error
// user.likes birds = true  //dot access doesn’t work


// let user = {};
// // set
// user["likes birds"] = true;

// // get
// alert(user["likes birds"]); // true

// // delete
// delete user["likes birds"];

// let user = {
//     name:"ava",
//     age: 24
// };
// let key = prompt("What do you want to know about the user?", "name");

// // access by variable
// alert(user[key]); // John (if enter "name")

// Dot notation cannot be used in a similar way
// let user = {
//     name : "ava",
//     age:30
// };

// let key = "name";
// alert(user.key); // undefined


// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//     [fruit]:5,
//     [banana]:2,
// };

// // alert(bag.apple);
// alert(bag.banana);

// const person = {
//     name:"John",
//     age:30
// };

// Object.defineProperty(person, 'name',{writable:false});

// person.name = 'Mike';
// console.log(person.name);

// var arr = [7, 5, 9 , 1];
// var value = Math.max.apply(null, arr);
// console.log(value);

// function code(id,name){
//     this.id = id;
//     this.name = name;
// }
// functionpcode(id, name)
// {
//     code.call(this, id, name)
// }
// document.writeln(new code(004, "James Deo").id);


// let person = {
//     name: "John",
//     age:30,
//     sayHello: function(){
//         console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`);
//     }
// };

// let student = Object.create(person);
// student.name = "Marry";
// student.grade = "A";

// student.sayHello();

// function foo2(){
//     console.log(this); // window
// }
// let obj21 = {
//     foo: function(){
//         console.log(this); // obj21
//         foo2();
//     }
// }
// obj21.foo();


// function printThis(params){
//     console.log(this);

// }
// let obj = {
//     a: 10,
//     b: 20,
//     c : printThis,
//     d: function(params){
//         console.log(this);
//         printThis(); // 2
//         let x = this.c;
//         x(); //3
//         this.c();//4
//         console.log(this.c == printThis);
//     }
// }
// obj.d(); // 1. callsite

// tasks

// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// Create an empty object user.
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// function isEmpty(obj){
//     for(let key in obj){
//         // if the loop has started, there is a property
//         return false;
//     }
//     return true;
// }

// Sum object properties

// we have an object storing salaries of our team:

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130

// };

// let sum = 0;

// for(let key in salaries){
//     sum += salaries[key];
// }
// console.log(sum);

// Multiply numeric property values by 2

// before the call 
// let menu = {
//     width:200,
//     height:300,
//     title:"My menu"
// };

// multiplyNumeric(menu);

// // after the call

// menu = {
//     width:400,
//     height:600,
//     title: "My menu"
// };

// function multiplyNumeric(obj){
//     for(let key in obj){
//         if(typeof obj[key] == 'number'){
//             obj[key] *= 2; 
//         }
//     }
// }

// Object references and copying

let message = "Hello";
let copy = message;

console.log(copy);

let user = { name: "John" };
let admin = user; // copy the reference
// When an object variable is copied, the reference is copied, but the object itself is not duplicated.