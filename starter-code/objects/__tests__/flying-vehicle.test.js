'use strict';

const FlyingVehicle = require('../flying-vehicle-class.js');

describe('FlyingVehicle', () => {

    describe('Airplane', () => {

        let airplane = new FlyingVehicle.Airplane('Gulfstream G400');

        test('has wings', () => {
            expect(airplane.flight).toEqual('wings');
        });

        test('can fly with a little bit of pixie dust', () => {
            expect(airplane.flying()).toBeTruthy();
        });

        test('can crash in a fiery explosion', () => {
            expect(airplane.crashing()).toBeTruthy();
        });

        test('can hover', () => {
            expect(airplane.hover).toBeUndefined();
        });

    });

    describe('Helicopter', () => {

        let helicopter = new FlyingVehicle.Helicopter('Boeing AH-64 Apache');

        test('has rotors', () => {
            expect(helicopter.flight).toEqual('rotors');
        });

        test('can fly with a little bit of pixie dust', () => {
            expect(helicopter.flying()).toBeTruthy();
        });

        test('can crash in a fiery explosion', () => {
            expect(helicopter.crashing()).toBeTruthy();
        });

        test('can hover', () => {
            expect(helicopter.hover()).toBeTruthy();
        });

    });

});
