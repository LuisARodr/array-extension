# Array Extension

Array Extension is a library that extends the functionality of the Arrays on Javascript.

## Instalation

WIP

## Usage

WIP

## Methods

- `each( callback )`

  `each()` executes `callback` for each value of the array, `callback` is a function that takes the following parameters:
    - *value*: Is equal to the current value of the array
    - *index*: Is equal to the current index of the array
  
  **Throws** `TypeError` when the callback is not a function.

- `where( spec )`

  `where()` returns a new array from the elements of the array that satisfies the spec function, the spec function takes the following parameter:
    - *value*: Is equal to the current value to evaluate of the array
    
  **Throws** `TypeError` when spec is not a function.
  
 - `any( spec )`
  
    `any()` returns `true` when the value of `spec` is on the array, if `spec` is a `function` then it evaluates every value in the array and returns `true` if `spec` `returns true` for any evaluation, otherwise it `returns false`.
    `spec` on its `function` form takes two params:
    - *value*: Is equal to the current value of the array
    - *index*: Is equal to the current index of the array

- `select( spec )`

  `select()` returns a new array with the values returned by the spec function for each value of the array.
  `spec` takes two params:
  - *value*: Is equal to the current value of the array
  - *index*: Is equal to the current index of the array
  
  **Throws** `TypeError` when spec is not a function.
  
