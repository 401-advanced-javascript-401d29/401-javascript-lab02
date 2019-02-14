'use strict';


// const Vehicle = require('./vehicle-constructor.js');
const Car = require('./car-class.js');
// const Vehicle = require('./factory.js');

// Implement a car and motorcycle
const UseCarClass = new Car();
const mazda = new Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

// const harley = new Vehicle.Motorcycle('Harley');
// console.log(harley.name, harley.wheelie(), harley.stop());

