const inputBox = document.getElementById("input");



const searchCallbackFunction = (e) =>{
    const value = e.target.value;

    // api call
    console.log(value, "value");
    
}
inputBox.addEventListener("input", searchCallbackFunction);


// Debouncing function
function myDebounce(callback, delay){
    let timerNumber;
    // console.log(arguments, "arguments");
    // const event=arguments[0];
    // console.log(event) 

    return function(){
        const event = arguments[0];
        clearTimeout(timerNumber);
        timerNumber = setTimeout(() => {
            // i should
            callback()
        }, delay);
    }
}

const debounceSearchCallbackFunction = myDebounce(searchCallbackFunction, 3000)

inputBox.addEventListener("input", debounceSearchCallbackFunction);