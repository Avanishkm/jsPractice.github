// const inputBox = document.getElementById("input");

// const searchCallbackFunction = (e) =>{
//     const value = e.target.value;
//     // api call
//     console.log(value, "value"); 
// }

// inputBox.addEventListener("input", searchCallbackFunction);


// // Debouncing function
// function myDebounce(callback, delay){
//     let timerNumber;
//     // console.log(arguments, "arguments");
//     // const event=arguments[0];
//     // console.log(event) 

//     return function(){
//         const event = arguments[0];
//         clearTimeout(timerNumber);
//         timerNumber = setTimeout(() => {
//             // i should
//             callback()
//         }, delay);
//     }
// }

// const debounceSearchCallbackFunction = myDebounce(searchCallbackFunction, 3000)
// inputBox.addEventListener("input", debounceSearchCallbackFunction);


// throttling 

// const fireBullets = (event)=>{
//     console.log("hello window");
// }
// function throttle(callback, delay){
//     let flag = true;
//     return function(){
//         const event= arguments[0];
//         if(flag){
//             callback(event);
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             }, delay);     
//         }
        
        
//         // setTimeout(() => {
//         //     flag = true;
//         // }, delay);
//     }
// }

// window.addEventListener("resize", fireBullets); // event argument

// const throttleFireBullets = throttle(fireBullets, 1000);

// window.addEventListener("resize", throttleFireBullets)// better function // 1 argument event




//  Memoize

function fibo(n){
    if(n==1){
        return 0;

    }

    if(n==2 || n==3){
        return 1;
    }
    return fibo(n-1) + fibo(n-2);
}

function Memoization(callback){
    let cacheMemory = {};
    return function(){
        const n = arguments[0];

        if(cacheMemory[n]){
            return cacheMemory[n];
        }else{
            // expensive function
            const result = callback(n);
            cacheMemory[n] = result;
            return result;
        }
    }
}

const improvedFibo = Memoization(fibo);
const res1 = improvedFibo(45);
const res2 = improvedFibo(45);
const res3 = improvedFibo(45);
const res4 = improvedFibo(45);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);

// const ans = fibo(40);
// console.log(ans);