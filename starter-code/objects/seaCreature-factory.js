'use strict';

const SeaCreature = function(name, deliciousness) {
    this.name = name;
    this.deliciousness = deliciousness;
    this.cooking = () => {
        return 'NOOOOO I want to live!!!!';
    };
    this.eating = () => {
        return 'nom nom nom nom nom swallow';
    };
};

function Fish(name) {
    const newFish = Object.assign(
        {},
        new SeaCreature(name, 'yucky')
    );
    return Object.freeze(newFish);
}

function Lobster(name) {
    const newLobster = Object.assign(
        {},
        {walking},
        new SeaCreature(name, 'yummy')
    );
    function walking() {
        return 'Doing the Lobster Shuffle!'
    }
    return Object.freeze(newLobster);
}

module.exports = {Fish, Lobster};