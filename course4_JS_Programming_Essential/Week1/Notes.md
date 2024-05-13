Variables are used for storing and managing data
Variables declaration keywords:
- var: function-level scope (available inside the whole functions, even outside curly block)
- let: block-level scope(only available inside curly block, outside not available)
- const: create constant, available in the whole file

Name conventions:
- start with letter, underscore, or dollar sign
- may also contain numbers
- case sensitive

Data types:
- Primitive: integer, float, string, boolean, undefined (no value), null (empty value)
- Composite: manage multiple value, example objects and arrays

Operators:
- arithmetic: for mathematic calculations
- comparison: compare value, ie. ==(equal), ===(strict equal), >, <, >=
- logical: boolean value manipulation, ie. &&, ||, !
- unary: single value operator, ie. increment (++) or decrement (--)
- typeof: returns string of the type of data, example: typeof x

Control Flow:
- conditional statement: if, then if, if else, switch-default, ternary (myVar > 1 ? Yes : No)
- loop: for loop (specified times to loop, clear requirements) ; while (run code while condition still true, evaluate condition before run) ; do while (similar to while, but at least one run if the condition is false)

Functions declaration:
- use function keyword: function myFunction() {}
- defined using variables: const myVar = function() {}

Types of functions:
- named: can be called and named. Ex. function myFunction() {}
- Immediately Invoked FE (IIFE): automatically invoked, cannot be called, used to prevent global contamination and variable conflict. Ex. (function helloWorld() {})
- Arrow function: short version of named. Ex const myFunc = () => {}
- Anonymous function: has no name and used as arguments, kind of similar to arrow. Ex. const multiply = (a,b) => a*b;

Function Closure is important for information hiding and data encapsulation. Function closure is defined by function inside a function

Function hoisting: function declaration moved to the top so it can be used before its declaration. It can only be used on FUNCTION DECLARATION AS NAMED FUNCTION (ie. function myFunction()). It is important for, readability, order independence, recursion, and conditional execution

Examples of commonly used events: click, mouseover (hover), keydown, change
To listen to these events, use addEventListener function on DOM element. Example:
    const textInput = document.getElementById('textInput');
  textInput.addEventListener('focus', function() {
    console.log('Input focused');
  });
