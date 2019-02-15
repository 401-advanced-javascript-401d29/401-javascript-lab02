'use strict';

const Vehicle = require('../vehicle-class.js');

describe('Vehicles', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    test('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    test('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    test('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    test('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    test('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    test('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    test('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    test('can do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

});
