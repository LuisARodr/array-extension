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
 * Returns a new array with a maximun number of values equal to howMany, if
 * spec is present then the resulting values need to satisfy the function to
 * be added to the resulting array.
 * @param {number} howMany - The maximun number of values on the resulting array.
 * @param {spec} spec - This function is called for every value of the array, if 
 * it returns true then the value can be added to the resulting array.
 * @returns {*[]} - An array of maximun size equal to howMany and filtered by 
 * spec if present.
 * @throws {TypeError} - If spec is no a function.
 */
Array.prototype.take = function take(howMany, spec) {
    const result = [];
    let specArray = [];
    if (spec) {
        if ((typeof spec) != 'function') {
            throw new TypeError(`Type error: ${spec} is not a function.`);
        }

        for (let i = 0; i < this.length; i++) {
            if (spec.call(this, this[i], i)) {
                specArray.push(this[i]);
            }
        }
    } else {
        specArray = this;
    }

    howMany = isNaN(howMany) ? 0 : howMany;

    for (let i = 0; (i < specArray.length) && (i < howMany); i++) {
        result.push(specArray[i]);
    }
    
    return result;
}

/**
 * Retuns a new array with the values of the array minus the first howMany values.
 * @param {number} howMany - The number of values of the array to be skiped.
 * @returns {*[]} - A new array with the values that didn't got skiped.
 */
Array.prototype.skip = function(howMany) {
    howMany = isNaN(howMany) ? 0 : howMany;

    const result = [];

    for (let i = howMany; i < this.length; i++) {
        result.push(this[i]);
    }

    return result;
}

/**
 * Returns the first element on collection that satifies spec, if spec is not
 * present then it returns the first value of the array. Returns a null value
 * if the collection is empty or there's no element to match.
 * @param {spec} spec - A function to evaluate every value of the array.
 * @returns {*} The first element to satisfy spec or null if there's no match.
 * @throws {TypeError} - If spec is no a function.
 */
Array.prototype.first = function(spec) {
    if (spec === undefined) {
        return this[0];
    }
    if ((typeof spec) != 'function') {
        throw new TypeError(`Type error: ${spec} is not a function.`);
    }
    
    for (let i = 0; i < this.length; i++) {
        if (spec.call(this, this[i], i)) {
            return this[i];
        }
    }
    
    return null;
}

/**
 * Returns the last element on collection that satifies spec, if spec is not
 * present then it returns the last value of the array. Returns a null value
 * if the collection is empty or there's no element to match.
 * @param {spec} spec - A function to evaluate every value of the array.
 * @returns {*} The last element to satisfy spec or null if there's no match.
 * @throws {TypeError} - If spec is no a function.
 */
Array.prototype.last = function(spec) {
    if (spec === undefined) {
        return this[this.length - 1];
    }
    if ((typeof spec) != 'function') {
        throw new TypeError(`Type error: ${spec} is not a function.`);
    }
    
    let lastValue = null;

    for (let i = 0; i < this.length; i++) {
        if (spec.call(this, this[i], i)) {
            lastValue = this[i];
        }
    }
    
    return lastValue;
}

/**
 * Returns the number of elements on the collection that satifies spec, if spec
 * is not present then it returns the length.
 * @param {spec} spec - A function that evaluates every value of the array, if spec
 * returns true then the value is counted towards the total.
 * @returns {number} - The count of values that satisfied the spec function 
 * or the length of the array if spec is not present.
 * @throws {TypeError} - If spec is no a function.
 */
Array.prototype.count = function(spec) {
    if (spec === undefined) {
        return this.length;
    }
    if ((typeof spec) != 'function') {
        throw new TypeError(`Type error: ${spec} is not a function.`);
    }

    let count = 0;

    for (let i = 0; i < this.length; i++) {
        if (spec.call(this, this[i], i)) {
            count++;
        }
    }

    return count;
}

/**
 * Returns the zero based position in the array of the element that satisfies
 * spec.
 * @param {spec|*} spec - The value to be matched on every value of the array 
 * on search of it, if spec is a function then a value is found when the function
 * is satisfied with that value, otherwise it will look for a value on the array
 * that is equal to spec.
 * @returns {number} - The index of the match with spec or -1 if there's no match.
 */
Array.prototype.index = function index(spec) {
    if ((typeof spec) == 'function') {
        for (let i = 0; i < this.length; i++) {
            if (spec.call(this, this[i] , i)) {
                return i;
            }
        }

        return -1;
    }

    for (let i = 0; i < this.length; i++) {
        if (spec === this[i]) {
            return i;
        }
    }

    return -1;
}

/**
 * A callback to evaluate every value of the array
 * @callback spec
 * @param {*} value - The current value of the array. 
 * @param {number} index - The index of the current value.
 * @returns {*} - The return value varies by usage.
 */
