'use strict';


// const Vehicle = require('./vehicle-constructor.js');
const Car = require('./car-class.js');
const Motorcycle = require('./motorcycle-class.js');
// const Vehicle = require('./factory.js');

// Implement a car and motorcycle
// const UseCarClass = new Car();
// const UseMotorcycleClass = new Motorcycle();
const mazda = new Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

