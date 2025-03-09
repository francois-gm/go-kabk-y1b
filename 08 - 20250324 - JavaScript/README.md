# Class 9, 2024/11/11

## Tutorial: Javascript essentials (30min)

What does Javascript do?
  
Essential terminology:
  
  - What is [a variable](https://www.w3schools.com/js/js_variables.asp) and [data types](https://www.w3schools.com/js/js_datatypes.asp)?
  - What is [an event](https://www.javatpoint.com/javascript-events) (event handler with [addEventListener](https://www.w3schools.com/jsref/met_document_addeventlistener.asp))?
  - What is a [function](https://www.w3schools.com/js/js_functions.asp)?
  - What is a [conditional statement](https://www.w3schools.com/js/js_comparisons.asp)?
  - What are javascript [operators](https://www.w3schools.com/js/js_operators.asp)?

### Variables

*Variables are "containers" for storing data*

- `var`, is a variable declaration type
- `let`, is a variable declaration type that can be redefined (**let** this be this value).
- `const`, is a variable declaration type that is not redefined (this value is **const**ant).

*Data can be of several types*

- Boolean: `true` or `false`
- Number: `0`, `1`, `2`, `-1`, `-2`, `3.1416`
- String: `"someText"`
- Array: `["apple", "orange", "banana"]`
- Object: …

**Example**

```
let appleCount = 5;
let orangeCount = 5;
let lemonCount = 2;
let bananaCount = 3;

const appleColor = "red";
```
where the apple count **can change** but its color is always (**const**antly) red.
```
let fruitCount = appleCount + orangeCount + lemonCount + bananaCount;
```
where `fruitCount` equals to **15**.
```
let citrusCount = orangeCount + lemonCount;
```
where `citrusCount` equals to **7**.

### Naming convention

In JavaScript, elements names (variables, functions) can contain *letters* (both *uppercase* and *lowercase*), *numbers*, *underscores*, and *dollar signs*. However, the names can not begin with numbers.

**Valid** names:

```
var Name;
var My_Name;
var $Name;
var _Name;
var Name123;
```

**Non valid** names:

```
var My-name;  // Hyphens not allowed
var 123myName;  // Can not start with numbers
var My name;  // Spaces not allowed
```

### Events and functions

*A JavaScript **function** is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it, an **event** as an example)*

```
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
```
where above is the function and below is an event that invokes the function
```
document.addEventListener("click", myFunction);
```

### Operators

**Comparison operators**

- `>` is bigger than
- `<` is smaller than
- `>=` is bigger or equal to
- `<=` is smaller or equal to
- `==` is equal to
- `!=` is not equal to
- `===` is strictly equal to
- `!==` is strictly not equal to

**Logical operators**

- `&&` and
- `||` or

**Example of a conditional statement**

```
let juiceType;

if( (lemonCount > 0) && (orangeCount == 0) ){
  juiceType = lemonade;
else if ( (lemonCount > 0) && (orangeCount > 0) ){
  juiceType = citrusPunch;
else{
  juiceType = fruitPunch;
}
```

- First we declare (but we don't define) the juice type.
- Then we ask if the lemon count is equal or over one, and there are no oranges.
- If that is the case, our juice type is a lemonade.
- If that is not the case, then (else if) we ask if the lemon count is equal or over one, and there is one orange or more.
- If that is the case, our juice is a citrus punch.
- If it's not a lemonade or a citrus punch, then it's a fruit punch.

## Tutorial: manipulating the document (the *DOM*) with Javascript (2h)

- Create a JS counter (increment)
- Create a JS random color generator
- Create a toggler button (dark mode, and or a modal menu)

## Pseudo-code examples

Look at [Pseudo-code](https://en.wikipedia.org/wiki/Pseudocode), [Structured English](https://en.wikipedia.org/wiki/Structured_English), [Natural-language programming](https://en.wikipedia.org/wiki/Natural-language_programming), [esoteric language](https://en.wikipedia.org/wiki/Esoteric_programming_language) (2h)
