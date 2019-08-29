'use strict'

/**
 * Executes a callback function for each value of the array.
 * @param {spec} callback - A function to be executed for each value of the array.
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
 * spec function.
 * @param {spec} spec A function that evaluates every value of the array, if spec
 * returns true then the value is added to the resulting array.
 * @returns {*[]} - A new array from the elements of the array that satisfies the
 * spec function.
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
        result.push(spec.call(this, value, index));
    });

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
Array.prototype.skip = function skip(howMany) {
    howMany = isNaN(howMany) ? 0 : howMany;

    const result = [];

    for (let i = howMany; i < this.length; i++) {
        result.push(this[i]);
    }

    return result;
}

/**
 * Returns the first element on the array that satifies spec, if spec is not
 * present then it returns the first value of the array. Returns a null value
 * if the collection is empty or there's no element to match.
 * @param {spec} spec - A function to evaluate every value of the array.
 * @returns {*} The first element to satisfy spec or null if there's no match.
 * @throws {TypeError} - If spec is no a function.
 */
Array.prototype.first = function first(spec) {
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
 * Returns the last element on the array that satifies spec, if spec is not
 * present then it returns the last value of the array. Returns a null value
 * if the collection is empty or there's no element to match.
 * @param {spec} spec - A function to evaluate every value of the array.
 * @returns {*} The last element to satisfy spec or null if there's no match.
 * @throws {TypeError} - If spec is no a function.
 */
Array.prototype.last = function last(spec) {
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
 * Returns the number of elements on the array that satifies spec, if spec
 * is not present then it returns the length.
 * @param {spec} spec - A function that evaluates every value of the array, if spec
 * returns true then the value is counted towards the total.
 * @returns {number} - The count of values that satisfied the spec function 
 * or the length of the array if spec is not present.
 * @throws {TypeError} - If spec is no a function.
 */
Array.prototype.count = function count(spec) {
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
 * Returns a new array with the values of the property for each value of the 
 * array.
 * @param {string|symbol} property -  name of the property that is going to be filling 
 * the array.
 * @returns {*[]} - An array with the values of the property, if a property is
 * found as undefined then is not added to the array.
 */
Array.prototype.pluck = function pluck(property) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (this[i][property] !== undefined) {
            result.push(this[i][property]);
        }
    }

    return result;
}

/**
 * Returns the sum of the result of excecuting spec, if spec is not present,
 * it will return the summatory of the array.
 * @param {spec} spec - A function to be executed for every value of the array,
 * its return value added is what forms the result.
 * @returns {number|string} - The result of adding all the values returned by 
 * spec or null if the array is empty
 * @throws {TypeError} - If spec is not a function.
 */
Array.prototype.sum = function sum(spec) {
    if ((spec !== undefined) && ((typeof spec) != 'function')) {
        throw new TypeError(`Type error: ${spec} is not a function.`);
    }

    let sum = null;

    if ((typeof spec) == 'function') {
        for (let i = 0; i < this.length; i++) {
            if (i == 0) {
                sum = spec.call(this, this[i], i);
                continue;
            }
            sum += spec.call(this, this[i], i);
        }
    
        return sum;
    }
    
    for (let i = 0; i < this.length; i++) {
        if (i == 0) {
            sum = this[i];
            continue;
        }
        sum += this[i];
    }

    return sum;
}

/**
 * Returns the maximum value on the collection or null if the array is empty,
 * if comparer is not present it will evaluate the elements as if they where 
 * numbers.
 * @param {comparer} comparer - A function used to make the comparations, this
 * param not being present means the comparison will be made as if every value
 * on the array were numbers.
 * @returns {*} - The maximum value on the collection acording to the comparer.
 * @throws {TypeError} - If spec is present and is not a function.
 */
Array.prototype.max = function max(comparer) {
    if ((comparer !== undefined) && ((typeof comparer) != 'function')) {
        throw new TypeError(`Type error: ${comparer} is not a function.`);
    }

    let max = null;

    if ((typeof comparer) == 'function') {
        for (let i = 0; i < this.length; i++) {
            if (i == 0) {
                max = this[0];
                continue;
            }

            max = (comparer.call(this, max, this[i])) < 0 ? this[i] : max;
        }

        return max;
    }

    for (let i = 0; i < this.length; i++) {
        if (i == 0) {
            max = this[0];
            continue;
        }

        max = (max < this[i]) ? this[i] : max;
    }

    return max;
}

/**
 * Returns the minumum value on the collection or null if the array is empty,
 * if comparer is not present it will evaluate the elements as if they where 
 * numbers.
 * @param {comparer} comparer - A function used to make the comparison, this
 * param not being present means the comparisons will be made as if every value
 * on the array were numbers.
 * @returns {*} - The minumum value on the collection according to the comparer.
 * @throws {TypeError} - If spec is present and is not a function.
 */
Array.prototype.min = function min(comparer) {
    if ((comparer !== undefined) && ((typeof comparer) != 'function')) {
        throw new TypeError(`Type error: ${comparer} is not a function.`);
    }

    let min = null;

    if ((typeof comparer) == 'function') {
        for (let i = 0; i < this.length; i++) {
            if (i == 0) {
                min = this[0];
                continue;
            }

            min = (comparer.call(this, min, this[i])) > 0 ? this[i] : min;
        }

        return min;
    }

    for (let i = 0; i < this.length; i++) {
        if (i == 0) {
            min = this[0];
            continue;
        }

        min = (min > this[i]) ? this[i] : min;
    }

    return min;
}

/**
 * A callback to evaluate every value of the array
 * @callback spec
 * @param {*} value - The current value of the array. 
 * @param {number} index - The index of the current value.
 * @returns {*} - The return value varies by usage.
 */

 /**
  * A function that returns negative when valueA < value B, zero when 
  * valueA === valueB or positive when valueA > valueB.
  * @callback comparer
  * @param {*} valueA - The first value to compare.
  * @param {*} valueB - The second value to compare.
  * @returns {number} - Returns a number being negative when valueA is bigger,
  * zero when both values are the same or positive when valueB is bigger.
  */
