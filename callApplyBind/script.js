let name = {
    firstname: "Avanish",
    lastname:"kumar",
    // printFullName: function(){
    //     console.log(this.firstname+" "+ this.lastname);
    // }

}

let printFullName = function(hometown, state){
    console.log(this.firstname+" "+ this.lastname+" "+ hometown+" "+ state);
}

printFullName.call(name, "Azamgarh", "uttar pradesh");

let name2 = {
    firstname:"Akash",
    lastname:"raj",

}

// function borrowing
printFullName.call(name2, "Delhi", "New delhi");
printFullName.apply(name2, ["Delhi", "New delhi"])

// bind method

let printMyName = printFullName.bind(name2, "New delhi","delhi");
console.log(printMyName);
printMyName();


// pollyfils

