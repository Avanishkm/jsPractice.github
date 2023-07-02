

let key = prompt("Enter key ")
let value = prompt("Enter value ")

localStorage.setItem(key, value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if(key === "red" || key == "blue"){
    localStorage.removeItem(key);
}

if(key == 0){
    localStorage.clear();
}