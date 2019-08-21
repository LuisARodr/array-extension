# Array Extension

Array Extension is a library that extends the functionality of the Arrays on Javascript.

## Instalation

WIP

## Usage

WIP

## Methods

- `each( callback )`

  `each()` executes `callback` for each value of the array. 
  - `callback` - A function that takes the following parameters:
    - *value*: Is equal to the current value of the array.
    - *index*: Is equal to the current index of the array.
  
  **Throws** `TypeError` when the callback is not a function.

- `where( spec )`

  `where()` returns a new array from the elements of the array that satisfies the spec function. 
  - `spec` - A function that takes two params:
    - *value*: Is equal to the current value of the array.
    - *index*: Is equal to the current index of the array.
    
  **Throws** `TypeError` when spec is not a function.
  
  **Returns** - A new array with the elements that satisfy the spec function.
  
 - `any( spec )`
  
    `any()` returns `true` when the value of `spec` is on the array, if `spec` is a `function` then it evaluates every value in the array and returns `true` if `spec` `returns true` for any evaluation, otherwise it `returns false`.
    - `spec` can be any value that will be compared to every value in the array unless it's a `function` then it'll be called for every value of the array, it takes two params on its function form:
      - *value*: Is equal to the current value of the array.
      - *index*: Is equal to the current index of the array.
    
    **Returns** - `true` if the `spec` is equal to a value on the array or the evaluation of `spec` is true for any value of the array.

- `select( spec )`

  `select()` returns a new array with the values returned by the spec function for each value of the array.
  - `spec` - A callback function that takes two params:
    - *value*: Is equal to the current value of the array.
    - *index*: Is equal to the current index of the array.
  
  **Throws** `TypeError` when spec is not a function.
  
  **Returns** - A new array with the return values of `spec` for every value of the array.
  
- `take( howMany, spec )`

  `take()` Returns a new array with a maximun number of values equal to howMany, if
   spec is present then the resulting values need to satisfy the function to
   be added to the resulting array.
   - `howMany` - A number that sets the maximun number of values on the resulting array.
   - `spec` - A function that is called for every value of the array, if it returns true then the value can be added to the resulting array. It has two params: 
     - *value*: Is equal to the current value of the array.
     - *index*: Is equal to the current index of the array.

   **Throws** `TypeError` when spec is not a function.

   **Returns** - An array of maximun size equal to howMany and filtered by 
   spec if present.

- `skip( howMany )` 

  `skip()` Retuns a new array with the values of the array minus the first howMany values.
  - `howMany` - The number of values of the array to be skiped in the new array.
  
  **Returns** - A new array with the values that didn't got skiped.
