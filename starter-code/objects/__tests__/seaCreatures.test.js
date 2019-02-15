'use strict';

const SeaCreature = require('../seaCreature-class.js');

describe('SeaCreature', () => {

    describe('Fish', () => {

        let fish = new SeaCreature.Fish('Puffer Fish');

        test('Is delicious to eat', () => {
            expect(fish.deliciousness).toEqual('yucky');
        });

        test('can be cooked', () => {
            expect(fish.cooking()).toBeTruthy();
        });

        test('can be eaten', () => {
            expect(fish.eating()).toBeTruthy();
        });

        test('cannot walk', () => {
            expect(fish.walking).toBeUndefined();
        });

    });

    describe('Lobster', () => {

        let lobster = new SeaCreature.Lobster('Nephropsis');

        test('Is delicious to eat', () => {
            expect(lobster.deliciousness).toEqual('yummy');
        });

        test('can be cooked', () => {
            expect(lobster.cooking()).toBeTruthy();
        });

        test('can be eaten', () => {
            expect(lobster.eating()).toBeTruthy();
        });

        test('can walk', () => {
            expect(lobster.walking()).toBeTruthy();
        });

    });

});
