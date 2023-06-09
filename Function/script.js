

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