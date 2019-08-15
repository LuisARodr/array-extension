'use strict'

/**
 * Executes a callback function for each value of the array.
 * @param callback A function to be executed for each value of the array.
 * Takes two params: the current value of the array and the index of the value.
 * @throws {TypeError} If the callback type is no a function
 */
Array.prototype.each = function call(callback) {
    if ((typeof callback) != 'function'){
        throw new TypeError(`Type error: ${callback} is not a function.`);
    }
    for (let i = 0; i < this.length; i++) {
        callback.call(this, this[i], i);
    }
}
