'use strict';

function List() {
  this.length = 0;
  this.data = {};
  // this.data = [1,2,3,4,5,6,7,8,9,10];
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

// Maybe found help here https://stackoverflow.com/questions/30135113/shifting-a-javascript-array-one-spot-to-the-left-without-using-the-shift-met
List.prototype.shift = function() {
  let returnValue = this.data[this.length-1];
    return returnValue;
    for(let a = 1 ; a < this.length ; a++){
          this.data[a-1] = this.data[a];
      }
    this.data[this.length-1] = 0;
    console.log(returnValue);
};

// unshift() {
//
// }
//
// forEach() {
//
// }
//
// map() {
//
// }
//
// filter() {
//
// }
//
// reduce() {
//
// }

module.exports = List;
