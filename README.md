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

  `skip()` Returns a new array with the values of the array minus the first howMany values.
  - `howMany` - The number of values of the array to be skiped in the new array.
  
  **Returns** - A new array with the values that didn't got skiped.
  
- `first( spec )`

  `first()` Returns the first element on the collection that satisfies `spec`, if `spec` is not present then it returns the first value of the array. Returns a `null` value if the collection is empty or there's no element to match.
  - `spec` - A function to evaluate every value of the array.
  
  **Returns** - The first element to satisfy spec or null if there's no match.
  
  **Throws** `TypeError` when spec is not a function.
  
- `last( spec )`

  `last()` Returns the last element on the collection that satisfies `spec`, if `spec` is not present then it returns the last value of the array. Returns a `null` value if the collection is empty or there's no element to match.
  - `spec` - A function to evaluate every value of the array.
  
  **Returns** - The last element to satisfy spec or null if there's no match.
  
  **Throws** `TypeError` when spec is not a function.
  
- `count( spec )`

  `count()` Returns the number of elements on the collection that satifies spec, if spec is not present then it returns the length.
  - `spec` - A function that evaluates every value of the array, if spec returns true then the value is counted towards the total.
  
  **Returns** - The count of values that satisfied the spec function or the length of the array if spec is not present.
  
  **Throws** `TypeError` when spec is not a function.
  
- `index( spec )`

  `index()` return the zero based position in the array of the element that satisfies spec.
    - `spec` - The value to be matched on every value of the array on search of it, if spec is a fuction then a value is found when the function is satisfied with that value, otherwise it will look for a value on the array that is equal to spec. On its function form spec takes two params: 
      - *value*: Is equal to the current value of the array.
      - *index*: Is equal to the current index of the array. 
  
  **Returns** - The index of the match with spec or -1 if there's no match.
  
- `pluck( property )`

  `pluck()` Returns a new array with the values of the property for each value of the array.
  - `property`- Name of the property that is going to be filling the array.
  
  **Returns** - An array with the values of the property, if a property is found as undefined then is not added to the array.
  
- `sum( spec )` returns the sum of the result of excecuting spec, if spec is not present, it will return the summatory of the array.
  - `spec` - A function to be executed for every value of the array, its return value added is what forms the result, it takes two params: 
      - *value*: Is equal to the current value of the array.
      - *index*: Is equal to the current index of the array. 
  
  **Retuns** - The result of adding all the values returned by spec or the sum of every value of the array if spec is not present or null if the array is empty.
  
  **Throws** `TypeError` If spec is present and is not a function.
  
- `max( comparer )` returns the maximum value on the collection or null if the array is empty, if comparer is not present it will evaluate the elements as if they where numbers.

  - `comparer` - A function used to make the comparations, this param not being present means the comparations will be made as if every value on the array where numbers. Returns negative when valueA < value B, zero when valueA === valueB or positive when valueA > valueB. It takes two params:  
    - *valueA*: The first value to compare.
    - *valueB*: The second value to compare.
    
  **Returns** - The maximum value on the array acording to the comparer.

  **Throws** `TypeError` If spec is present and is not a function.
  
- `min( comparer )` returns the minumum value on the collection or null if the array is empty, if comparer is not present it will evaluate the elements as if they where numbers.

  - `comparer` - A function used to make the comparations, this param not being present means the comparations will be made as if every value on the array where numbers. Returns negative when valueA < value B, zero when valueA === valueB or positive when valueA > valueB. It takes two params:  
    - *valueA*: The first value to compare.
    - *valueB*: The second value to compare.
    
  **Returns** - The minimum value on the array acording to the comparer.

  **Throws** `TypeError` If spec is present and is not a function.
  
  
