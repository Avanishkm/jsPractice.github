


// hoc ,  array chaining
const employeeData = [

    { name: "Chim chom", salary: 400000 },
    
    { name: "rim rom", salary: 320000 },
    
    { name: "him hom", salary: 480000 },
    
    { name: "tir tor", salary: 460000 },
    
    { name: "tir tor", salary: 560000 },
    
    { name: "tir tor", salary: 660000 },
    
    ];


    //  i do not need the data whose salary is less than 4 lakh

    const filterData = employeeData.filter((v, i, array)=>{
        return i%2 == 0;
        
    }).map((value)=>{

    })

    console.log(filterData);

    


    // ans
    // const updatedemployeeData = [
    
    // { name: "Chim chom", salary: 400000, isManager: false, isLead: true },
    
    // { name: "him hom", salary: 480000, isManager: false, isLead: true },
    
    // { name: "tir tor", salary: 460000, isManager: false, isLead: true },
    
    // { name: "tir tor", salary: 560000, isManager: true, isLead: false },
    
    // { name: "tir tor", salary: 660000, isManager: true, isLead: false },
    
    // ];


    

    // bind

    function securityProvider(...name) {

        console.log(this); // context
        
        console.log(name); //
        
        }
        
        const security1 = securityProvider.bind(
        
        { grandFather: "Rim Rom" },
        
        "Ram",
        
        "tikor"
        
        );
        
        const security2 = securityProvider.bind({ pet: "peti reti" }, "Tek", "pikor");
        
        security1("XYZ", 123, 456); // []
        
        security2("ABC");
        
        // my bind
        
        Function.prototype.mybind = function () {
            
        };