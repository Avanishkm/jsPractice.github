// let car = {
//     headlight: true,
// };

// function Sedan(name){
//     this.name = name;
// }

// Sedan.prototype = car;
// Sedan.prototype.type = "hello";
// // Sedan.__proto__ = car;


// let sedanObj = new Sedan("Some Name");

// console.log(sedanObj.headlight);
// console.log(sedanObj.name);
// console.log(sedanObj.prototype);
// console.log(sedanObj.__proto__);
// console.log(Sedan.prototype);

function greet(name = 'Friend', greeting = 'Hello') {
    console.log(`${greeting}, ${name}!`);
   }
   
   greet('John');

