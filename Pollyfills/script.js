// pollyfills

// map

// const resultMap = [1,2,3,4].map((item, index, array)=>{
//     return {
//         index,
//         value: item
//     }
// })
// console.log(resultMap)

// // my map

// Array.prototype.myMap = function(callback){
//     let arr = [1,2,3,4,5];
//     const result = [] // this collects the returned val from the callback function.

//     for(let index=0; index<arr.length; index++){
//         const item = arr[index];
//         const returnVal = callback(item)
//         result.push(returnVal)
//     }
//     return result;
// } 

// // this 
// const callback = (item, index)=>{
//     return{
//         index,
//         value: item,
//     }
// }

// const res = [123,152, 452].myMap(item, index) // callsite ?? binding ? implicit
    
// console.log(res, "My map");


// filter------==>


// const callbackFilter = (item, index)=>{
//     return item >5;
// }
// const resultFilter= [1,2,3,4,5,6,7,8,9].filter(callbackFilter)
// console.log(resultFilter, "filter");

// Array.prototype.myFilter = function(callback){

//     let arr = [1,2,3,4,5,6,7,8,9];
//     let resultArr = [];

//     for(let i=0; i<arr.length; i++){
//         const item = arr[i];
//         const res = callback(item, i);
        
//         if(res){
//             resultArr.push(item);
//         }
//     }
//     return resultArr;
// }

// const resultMyFilter= [1,2,3,4,5,6,7,8,9].myFilter(callbackFilter)
// console.log(resultFilter, "result myFilter")



// Reduce ------->

// const resultReduce = [1,2,3,4,5,6,7,8,9].reduce((accumulator, currentVal)=>{
//     return accumulator + currentVal;
// }, 0)
// console.log(resultReduce, "reduce")

// Array.prototype.myReduce = function(callback,initialValue){
//     let array = this;

//     let accumulator = initialValue ? initialValue : 0;

//     for (let index = 0; index < array.length; index++) {
//         const item = array[index];
//         accumulator = callback(accumulator, item)
        
//     }
//     return accumulator;
// }

// const resultMyReduce = [1,2,3,4,5,6,7,8,9].myReduce((accumulator, currentVal)=>{
//     return accumulator + currentVal;
// }, 0)
// console.log(resultMyReduce, "my reduce")


// ----------set interval, clearInterval, clearTimeout-----------

// set interval is a function thats take a callback function and number,  that number is in miliseconds.
// console.log("initial commit")
// let setTimeoutId = setTimeout(() => {
//     console.log("hey there setTime out");
    
// }, 3000);
// console.log(setTimeoutId, "setTimeoutId");

// const setIntervalId = setInterval(() => {
//     console.log("repeat....");
// }, 3000);

// console.log(setIntervalId, "setIntervalId");

// set interval and settimeout they are subsciption or take space


// object
// call apply bind,
// promises
// setInterval

/*
    call Apply Bind

*/

// const obj1 = {
//     name: "akash"
// }

// const obj2 = {
//     name: "avanish",
//     foo: function(a,b,c,d){

//         console.log(this.name, a,b,c,d);
//     }
// }

// obj2.foo.call(obj1, 10,20,30,40); // javascript people

// obj2.foo.apply(obj1, [10,20,30,40]);

// const fooCopy = obj2.foo.bind(obj1, 10,20,30,40) // !call site
// fooCopy();


// Function.prototype.myCall = function(context, ...args){ // rest operator
//     const func = this;
//     const copyContext = {...context}
//     copyContext.fnName = func;
//     copyContext.fnName(...args);
// }

// obj2.foo.myCall(obj1, 10,20,30,40)





// output of the question

// for(var i=0; i<8; i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, 2000)
// }
// 8 8 8 8 8 8 8 8
// in this question 
// var can used only one scope that is global scope 
// let can used different-2 scope for value
// in var only execution context create a new scope


// for(let i=0; i<8; i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, 2000)
// }

// 0 1 2 3 4 5 6 7 

// effies

// for(var i=0; i<8; i++){
//     ((i) => {
//         setTimeout(()=>{
//             console.log(i);
//         }, 2000)
//     })(i)
// }

// ---------------------- questions -------

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//    }
   
//    class Employee extends Person {
//     constructor(name, salary) {
//       super(name);
//       this.salary = salary;
//     }
//    }
   
//    class Manager extends Employee {
//     constructor(name, salary, department) {
//       super(name, salary);
//       this.department = department;
//     }
//    }
   
//    const myManager = new Manager('John', 50000, 'Marketing');
//    console.log(myManager.name);
//    console.log(myManager.salary);
//    console.log(myManager.department);

//
// function Animal(name) {
//  this.name = name;
// }

// Animal.prototype.getName = function() {
//  return this.name;
// }

// const cat = new Animal("Fluffy");

// console.log(cat.getName());

//========

// const age = 30;
// const message = `You are ${age >= 18 ? 'an adult' : 'a minor'}.`;
// console.log(message);


// --------------
// class Counter {
//     constructor() {
//       let count = 0;
      
//       this.increment = function() {
//         count++;
//       };
      
//       this.getCount = function() {
//         return count;
//       };
      
//       const privateMethod = function() {
//         console.log('This is a private method.');
//       };
//     }
//    }

// -----------

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
//    };
   
//    let keys = Object.keys(obj);
//    console.log(keys);


//-----------

obj2.foo.call(obj1, 10,11,12,13)

Function.prototype.myCall = function(context, ...args){
    const func = this;

    const copyContext = {...context} //
    copyContext.fnName = func

    copyContext.fnName(...args)
}

obj2.foo.myCall(obj1, 10, 11, 12, 13, "mycall");

// my apply

obj2.foo.apply(obj1, [10,11,12,13])
obj1{
    
}

Function.prototype.myApply = function(context, args){
    const func = this;
    let context = arguments[0];
    let args = arguments[1];

    const copyContext = {...context} //
    copyContext.fnName = func

    copyContext.fnName(...args)
}

obj2.foo.myApply(obj1, 10, 11, 12, 13, "myApply");