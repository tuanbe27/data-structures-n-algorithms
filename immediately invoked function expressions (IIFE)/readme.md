## Immediately revoked function expressions (IIFE)

#### IIFE Algorithm

 <p align=justify>- The IIFE algorithm is a type of function that creates a new execution context each time it is invoked. This means that each time the function is called, a new instance of the function is created and executed in its own environment.

#### Usage

 <p align=justify>- To use IIFE algorithm, simply call the function with the desired arguments. For example

```
   (function(name) {
       console.log(`Hello, ${name}!`)
   })('Fuu')
```

<p align=justify>- This will output:

```
    Hello, Fuu!
```

#### Advantages

- <p align=justify> It creates a new execution context each time it is invoked, which can help prevent variables pollution and other issues that can arise when using global variables.

- <p align=justify> It allows for better encapsulation of variables and functions, which can make it easier to manage and debug code.

- <p align=justify> It can be used to create private variables and functions, which can help prevent unintended access and modification of sensitive data.

#### Disadvantages

- <p align=justify> It can make it more difficult to debug code, as it can be harder to track down where a variable or function is defined.

- <p align=justify> It can make it more difficult to test code, as it can be difficult to isolate the code being tested from the surrounding code.

- <p align=justify> It can make it more difficult to optimize code, as it can be difficult to determine the impact of a function on the surrounding code.
