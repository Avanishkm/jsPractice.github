// const cloneDeep = (obj) => {

//     if (obj == null && typeof obj != "object") {
    
//     return obj;
    
//     }
    
//     const result = {};
    
//     for (let key in obj) {
    
//     result[key] = cloneDeep(obj[key]); // how this working
    
//     }
    
//     return result;
    
//     };
    
//     const updatedObject1 = cloneDeep(object);
    
//     updatedObject1.a.b.c = "Lpu";
    
//     console.log("updatedObject1", updatedObject1);
    
//     console.log(object);


// var object111 = {
//     city:{
//         name: "kanpur",
//         b:{
//             userName: "Vishal",
//             lastName: null,
//         },
//         mobile:{
//             phone: "8052667273"
//         }
//     }
// }

// const z =  null;
// console.log(z.name);  //script.js:44 Uncaught TypeError: Cannot read properties of null (reading 'name')

// // when we will try to access any key from null and undefined value than not read value


// const Names= "Vishal";
// console.log(Names.tttttt) // undefined

// const chaining = (object) => {};

// const DaTa = {
//   name: "Vishal",
//   city: {
//     a: {
//       b: {
//         c: {
//           d: 123,
//         },
//       },
//     },
//   },
// };

// chaining(DaTa, "name.city.a.b.c.d"); //  123


// spread department->block->name(departMentBlockName)

// let student = {
//     name : "Adam" ,
//     lasdtName: 'Gil',
//     address: {
//         local: {
//             city: "UK",
//             pincode: '2392321' // => 1235667
//         }
//     },
//     department : {
//         block : {
//             name: "36A"
//         }
//     },
//     hostel : {
//         name: 'BH3'
//     },
//     collegeName: {
//         name: "LPU"
//     }
// }

// const {
//     address: {
//         local:{pincode: cityPincode},
//     },
// } = student;

// console.log("pincode", cityPincode);


//     // solotion

//     const departmentBlockName = student.department.block.name;
//     const HostelName = student.hostel.name;

// // object distructuring
//     const t = {a:123, b:256};
//     const {a:a1, b:b1} = t;
//     console.log(a1,b1, "object distructuring")


//     // 

// const studentsMArks = [21, 53, 36];
// studentsMArks[3] = 78;

// const marks = {math:"234", english: 299};

// const subject = "math";
// const {[subject]: mathMarks, english} = marks;

// console.table(student);

// const newtons = [{name: 'vishal', grade:'A'},{name: 'vishal11', grade:'AA'}];
// for(let {name, grade} of newtons){
//     console.log(name, grade);
// }

// write a mul function

// function mul(x){
//     return (y) => {
//         return (z) => {
//             return x*y*z;
//         }
//     }
// }

// console.log(mul(2)(3)(4));
// console.log(mul(4)(3)(4));

// 6 How to empty an array in JavaScript?

// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(arrayList)
// arrayList = [];
// console.log(arrayList)

// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
// var anotherArrayList = arrayList;  // Referenced arrayList by another variable
// arrayList = []; // Empty the array
// console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']

// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
// var anotherArrayList = arrayList;  // Referenced arrayList by another variable
// arrayList.length = 0// Empty the array
// console.log(anotherArrayList); // Output []

// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
// var anotherArrayList = arrayList;  // Referenced arrayList by another variable
// arrayList.splice(0,arrayList.length) // Empty the array by setting length to 0
// console.log(anotherArrayList); // Output []

// while(arrayList.length){
//     arrayList.pop();
// }

// Question 7. How to check if an object is an array or not?

var arrayList = [1,2,3];
// function greet(param){
//     if(typeof param === 'string'){

//     }
//     else{
//         // If param is of type array then this block of code would execute
//     }
// }

if(Object.prototype.toString.call(arrayList) === '[object Array]'){
    console.log('Array!');
}