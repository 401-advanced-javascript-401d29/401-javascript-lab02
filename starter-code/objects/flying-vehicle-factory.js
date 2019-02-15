'use strict';

const FlyingVehicle = function(name, flight) {
    this.name = name;
    this.flight = flight;
    this.flying = () => {
        return 'a little bit of pixie dust';
    };
    this.crashing = () => {
        return 'AHHHHHHHHHHHHHHHH!!!!!!!!! BOOM!!';
    };
};

function Airplane(name) {
    const newAirplane = Object.assign(
        {},
        new FlyingVehicle(name, 'wings')
    );
    return Object.freeze(newAirplane);
}

function Helicopter(name) {
    const newHelicopter = Object.assign(
        {},
        {hover},
        new FlyingVehicle(name, 'rotors')
    );
    function hover() {
        return 'I am Floating!!'
    }
    return Object.freeze(newHelicopter);
}

module.exports = {Airplane, Helicopter};