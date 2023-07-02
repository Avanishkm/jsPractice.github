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

// let message = "Hello";
// let copy = message;

// console.log(copy);

// let user = { name: "John" };
// let admin = user; // copy the reference
// When an object variable is copied, the reference is copied, but the object itself is not duplicated.

// Property value shorthand

// function makeUser(name, age){
//     return {
//         name: name,
//         age: age,
//         // ... other
//     };
// }

// let user = makeUser("John", 30);
// console.log(user.name);
// console.log(user.age);

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
// };

// console.log(obj.for + obj.let + obj.return)

// let obj = {
//     0: "test"
// };

// console.log(obj["0"])
// console.log(obj[0])

// let obj ={};
// obj.__proto__ = 5;
// console.log(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

// let user = {};
// console.log(user.noSuchProperty === undefined) // true

// The "for..in" loop

// for(key in object){
//     // executes the body for each "key" among object property
// }

// let user = {
//     name: "John",
//     age:30,
//     isAdmin: true

// };

// for(let key in user){
//     console.log(key) // name, age, isAdmin
//     // values for the keys
//     console.log(user[key]); // john, 30, true
// }

// math.trunc is a built-in function that remove the decimal part;

// alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
// alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
// alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

// let user = {
//     name: "John",
//     surname: "Smith"
//   };
//   user.age = 25; // add one more
  
//   // non-integer properties are listed in the creation order
//   for (let prop in user) {
//     alert( prop ); // name, surname, age
//   }



// Object references and copying:

// object are stored and copied by reference where as primitive values;

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.


// let a = {};
// let b = a; // copy the reference

// alert( a == b ); // true, both variables reference the same object
// alert( a === b ); // true

//

// let a = {};
// let b = {}; // two independent objects

// alert( a == b ); // false

// const user = {
//     name: "John"
// }

// user.name = "pete" // (*)

// console.log(user.name) // pete


// Cloning and merging, Object.assign

// let user = {
//     name: "john",
//     age: 30
// };

// let clone = {}; // new empty object

// // let's copy all user properties into it
// for(let key in user){
//     clone[key] = user[key];
// }

// clone.name = "pete"; // changed the data in it
// console.log(user.name) // still John in the original object

// Object.assign()
// The Object.assign() //static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true


// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }
// alert(user.name); // John
// alert(user.canView); // true
// alert(user.canEdit); // true


// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = Object.assign({}, user);
  
//   alert( user.sizes === clone.sizes ); // true, same object
  
//   // user and clone share sizes
//   user.sizes.width = 60;    // change a property from one place
//   alert(clone.sizes.width); // 60, get the result from the other one


// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = structuredClone(user);
  
//   alert( user.sizes === clone.sizes ); // false, different objects
  
//   // user and clone are totally unrelated now
//   user.sizes.width = 60;    // change a property from one place
//   alert(clone.sizes.width); // 50, not related


// Object methods, "this":
// Objects are usually created to represent entities of the real world, like users, orders and so on:
// A function that is a property of an object is called its method.

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   user.sayHi = function() {
//     alert("Hello!");
//   };
  
//   user.sayHi(); // Hello!


/*
“this” in methods:
    In JavaScript, keyword "this" behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.
    It’s common that an object method needs to access the information stored in the object to do its job.
    To access the object, a method can use the this keyword.
*/

// let user = {
//     name: "John",
//     age: 30,

//     sayHi(){
//         // "this" is the current object
//         console.log(this.name);
//     }
// };

// user.sayHi() // John


// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       alert( user.name ); // leads to an error
//     }
  
//   };
  
  
//   let admin = user;
//   user = null; // overwrite to make things obvious
  
//   admin.sayHi(); // TypeError: Cannot read property 'name' of null


// function sayHi() {
//     alert( this.name );
//   }

// The value of this is evaluated during the run-time, depending on the context.
// this == undefined

// function sayHi() {
//     alert(this);
//   }
  
//   sayHi(); // undefined
// Arrow functions have no “this”

// let user = {
//     firstName: "Ilya",
//     sayHi() {
//       let arrow = () => alert(this.firstName);
//       arrow();
//     }
//   };
  
//   user.sayHi(); // Ilya

// For instance, here arrow() uses this from the outer user.sayHi() method:

// Summary
// Functions that are stored in object properties are called “methods”.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.
// The value of this is defined at run-time.

// When a function is declared, it may use this, but that this has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
// Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.


// Create a calculator
// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


// interview question

// const object = {

//     a: {
    
//         b: {
    
//             c: {
    
//                 d: {
    
//                     e: {
    
//                         f: null,
    
//                     },
    
//                 },
    
//             },
    
//         },
    
//     },
    
    // f: {
    
    //     f1: {
    
    //         f2: {
    
    //             f3: [],
    
    //         },
    
    //     },
    
    // },
    
//     z: {
    
//         z1: {
    
//             z2: {
    
//                 z3: 12345,
    
//             },
    
//         },
    
//     },
    
// };
    
// const flatObject = (obj) => {};

// flatObject(object); // {f:null, f3: [], z3:12345}



// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[2]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// [2]

// Constructor, operator "new"

// Constructor function:
// constructor function technically are regular functions. there are two conventions though:
// 1. they are named with capital letter first
// 2 they should be executed only with "new" operator

// function User(name){
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name); // jack
// console.log(user.isAdmin); // false

// When a function is executed with new, it does the following steps:
 // 1. A new empty object is created and assigned to this.
 // 2. The function body executes. Usually it modifies This, adds new properties to it.
 // 3. The value of this is returned 

//  function User(name){
//     // this = {}; (implicitly)

//     //  add properties to this
//     this.name = name;
//     this.isAdmin = false;

//     // return this; (implicitly)
//  }


// create a function and immediately ca;; it with new 

let user = new function(){
    this.name = "john";
    this.isAdmin = false;

    // ... other code for user creation
    // maybe complex logic and statements
    // local variables etc
}