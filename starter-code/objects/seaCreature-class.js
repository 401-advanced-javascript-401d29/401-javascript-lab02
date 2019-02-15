'use strict';

class SeaCreature {
    constructor(name, deliciousness) {
        this.name = name;
        this.deliciousness = deliciousness;
    }

    cooking() {
        return 'NOOOOO I want to live!!!! ';
    }

    eating() {
        return 'nom nom nom nom nom swallow';
    }
}

class Fish extends SeaCreature{
    constructor(name) {
        super(name, 'yucky');
    }
}

class Lobster extends SeaCreature {
    constructor(name) {
        super(name, 'yummy');
    }

    walking() {
        return 'Doing the Lobster Shuffle!';
    }
}



module.exports = {Fish, Lobster};



