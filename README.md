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
