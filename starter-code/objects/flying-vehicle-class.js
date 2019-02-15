'use strict';

class flyingVehicle {
    constructor(name, flight) {
        this.name = name;
        this.flight = flight;
    }

    flying() {
        return 'a little bit of pixie dust';
    }

    crashing() {
        return 'AHHHHHHHHHHHHHHHH!!!!!!!!! BOOM!!';
    }
}

class Airplane extends flyingVehicle{
    constructor(name) {
        super(name, 'wings');
    }
}

class Helicopter extends flyingVehicle {
    constructor(name) {
        super(name, 'rotors');
    }

    hover() {
        return 'I am Floating!';
    }
}



module.exports = {Airplane, Helicopter};



