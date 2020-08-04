// Pure function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

// Impure function
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

// Also impure if it introduce side effects
let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum; // side effect (causes changes outside)
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('New hobby'); // side effect
  console.log(hobbies);
}

printHobbies(hobbies);

// Naming should indicate if a f causes side effects, this may call an http request
// function sendDataToServer() {}

// this probably should not
// function add() {}

// FACTORY FUNCTIONS

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier); // 1.2 Because this function is called after multiplier = 1.2;
    return amount * tax * multiplier;
  }

  return calculateTax;
}

// This would need to recall the functions many times in the app. So we use a factory
// const vatAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);

const calculateVatAmount = createTaxCalculator(0.19); // lock the 0.19 for tax
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100)); // passes the amount to calculateTax which is returned by createTaxCalculator
console.log(calculateVatAmount(200));
// console.log(calculateTax(100)); // You cant call it here because is not defined, is defined inside another func
// so you need to store its references that is returned by the factory func createTaxCalculator 2 times
// each for calculateVatAmount and calculateIncomeTaxAmount


// CLOSURES

// Every function is a closure! For interviews
// Each function in the example above for example, have its lexical environment
// The inner function can access the tax parameter which is register at line 56 and 57 as argument
// The outer function cannot access the amount parameter

// Each lexical environment is created when the function is called/runs. So everytime we call
// createTaxCalculator(tax), calculateTax(amount) locks the tax that is passed to the outer function
