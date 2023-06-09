//  class vs constructor function
// class Car{
//     wheels;
//     fuelTank;
//     modelNumber;

//     constructor(wheels){
//         this.wheels = wheels;
//         this.fuelTank = fuelTank;
//         this.modelNumber = modelNumber

//     }

//     canIDrive(){
//         console.log("I can drive");
//     }
// }

// let hundai = new Car(2);
// let tata = new Car(2);

// /// constructor function

// function CarConstructorClass(wheels){
//     this.wheels = wheels;
//     this.fuelTank = "petrol";
//     this.modelNumber = "Basic 1";

//     // this.canIDrive = function(){
//     //     console.log("I can drive");
//     // } 

// }
// CarConstructorClass.prototype.canIDrive = function(){
//     console.log("I can drive");
// }



// let oldhundai = new CarConstructorClass(2);
// let oldTata = new CarConstructorClass(4)

// console.log(oldhundai, "old Hundai");
// console.log(oldTata, "old Tata");

// oldhundai.canIDrive();


//  ------- Class Inheritance Vs Constructor function

class Shape{
    color;
    constructor(color){
        this.color = color;
    }

    move(){
        console.log("mode shape");
    }

}

class Circle extends Shape{
    radius

    constructor(radius, color){
        super(color)
        this.radius = radius;
        
    }
    draw(){
        console.log("draw circle");
    }
}

const circle1 = new  Circle(10, "red");
console.log(circle1);  

// constructor func

function extend(child, parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function ShapeConstructorClass(color){
    this.color = color

}

ShapeConstructorClass.prototype.move = function(){
    console.log("mode shape");
}


function CircleConstructorClass(radius){
    // super call
    ShapeConstructorClass.call(this,color);
    this.radius = radius

}

// resetting the circle prototype and setting the shape prototype in chain

// CircleConstructorClass.prototype = Object.create(ShapeConstructorClass.prototype)//this line inside extend function

// adding the constructor 

// CircleConstructorClass.prototype.constructor = CircleConstructorClass

// adding the method
CircleConstructorClass.prototype.draw = function(){
    console.log("draw circle");
}

// const circleOld = new CircleConstructorClass(9, 'circle old'){
//     console.log(circleOld, "old Circle");
// }
