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

/**
 * Returns a new array from the elements of the array that satisfies the
 * spec function
 * @param spec A function that evaluates every value of the array, if spec
 * returns true then the value is added to the resulting array, it takes 
 * two params: the current value of the array and the index of the value.
 * @throws {TypeError} If spec is no a function.
 */
Array.prototype.where = function where(spec) {
    if ((typeof spec) != 'function') {
        throw new TypeError(`Type error: ${spec} is not a function.`);
    }

    const result = [];

    this.each(function evaluate(value, index) {
        if (spec.call(this, value, index)) {
            result.push(value);
        }
    });

    return result;
}

/**
 * Returns true when the value of spec is on the array, if spec is a function
 * then it evaluates every value in the array and returns true if spec returns
 * true for any evaluation, otherwise it returns false.
 * @param {spec|*} spec - Value to look for in the array, if spec is a function then it 
 * evaluates every value on the array.
 * @returns {boolean} - True if the value is found on the array or spec is evaluated
 * as true, false otherwise.
 */
Array.prototype.any = function any(spec) {
    if ((typeof spec) == 'function') {
        for (let i = 0; i < this.length; i++) {
            if (spec.call(this, this[i], i)) {
                return true;
            }
        }

        return false;
    }

    for (let value of this) {
        if (value === spec) {
            return true;
        }
    }

    return false;
}

/**
 * Returns a new array with the values returned by the spec function for
 * each value of the array.
 * @param {spec} spec - This function is called for every value of the array,
 * the return value is added to the new array.
 * @returns {*[]} - A new array with the values returned by spec.
 * @throws {TypeError} - If spec is no a function.
 */
Array.prototype.select = function select(spec) {
    if ((typeof spec) != 'function') {
        throw new TypeError(`Type error: ${spec} is not a function.`);
    }

    const result = [];

    this.each(function evaluate(value, index) {
        result.push(spec.call(this, value, index))
    })

    return result;
}

/**
 * A callback to evaluate every value of the array
 * @callback spec
 * @param {*} value - The current value of the array. 
 * @param {number} index - The index of the current value.
 * @returns {*} - The return value varies by usage.
 */
