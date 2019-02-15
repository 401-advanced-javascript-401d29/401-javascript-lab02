'use strict';


// const Vehicle = require('./vehicle-constructor.js');
// const Vehicle = require('./vehicle-class.js');
const FlyingVehicle = require('./flying-vehicle-class.js');
const SeaCreature = require('./seaCreature-class.js');
const Vehicle = require('./vehicle-factory.js');

// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement an airplane and helicopter
const dreamliner = new FlyingVehicle.Airplane('Boeing 787 Dreamliner');
console.log(dreamliner.name, dreamliner.flying(), dreamliner.crashing());

const blackHawk = new FlyingVehicle.Helicopter('Sikorsky UH-60 Black Hawk');
console.log(blackHawk.name, blackHawk.hover(), blackHawk.crashing());

//Implement a fish and a lobster
const catfish = new SeaCreature.Fish('Catfish');
console.log(catfish.name, catfish.cooking(), catfish.eating());

const homarus = new SeaCreature.Lobster('Homarus');
console.log(homarus.name, homarus.walking(), homarus.cooking(), homarus.eating());