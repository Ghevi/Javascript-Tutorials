// NUMBERS & STRINGS

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // random() gives a random n between 0 and 0.999999....
  // floor is for the + 1 -> 10,9999 -> 10
}
console.log(randomIntBetween(1, 10));

// Tagged template

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);

  let priceCategory = 'pretty cheap';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${string[2]}`;
  // return { name: productName, price: productPrice }; // Can also just return an object and lose the string part
}

const prodName = 'Javascript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}`;

console.log(productOutput);

// Regex (regular expression)

// const regex = new RegExp('/^\S+@\S+\.\S+$/'); // email regex
const regex = /^\S+@\S+\.\S+$/; // email regex (use this way)
const userInput = 'testtest.com';

regex.test(userInput); // false
regex.test('test@test.com'); // true;

const regex2 = /hello/; // case sensitive
regex2.test('hello'); // true
regex2.test('hi there, hello'); // true

regex2.test('Hello'); // false

const regex3 = /(h|H)ello/; // care unsensitive for h
regex3.test('Hello'); // true

const regex4 = /.ello/; // wildcard
regex4.test('hello'); // true
regex4.test('ello'); // false
regex4.test('Jello'); // true
regex4.test('     Jello'); // true

// For others check google

regex4.exec('jello'); // return an object with many info, for example, index tell you where the pattern is met
'hi jello'.match(regex4); // same

//*********************************************************************************************************************

// ADVANCED FUNCTIONS

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

// Exercises for closures

// let username = 'Max';

// function greetUser() {
//   console.log('Hi ' + username); // When created here, the function just locks the pointer to username, not the value
// }

// username = 'Manuel';

// greetUser();

// *********************************************************************************************

// let username = 'Max';

// function greetUser() {
//   let name = username; // Again hi manuel, the line reaches out to the outer environment when is run
//   console.log('Hi ' + name); // Again hi manuel, the line reaches out to the outer environment when is run
// }

// username = 'Manuel';

// greetUser();

// *********************************************************************************************

// let username = 'Max';

// function greetUser() {
//   let name = 'Anna'; // Variable shadowing, only if it cant find a name in this inner enviroment it goes outside
//   console.log('Hi ' + name); // Hi Anna because we store 'Anna' in name not the reference to username or name
// }

// let name = 'Maximilian';

// username = 'Manuel';

// greetUser();

// *********************************************************************************************

let username = 'Max';

function greetUser() {
  // let name = 'Anna'; // Variable shadowing, only if it cant find a name in this inner enviroment it goes outside
  console.log('Hi ' + name); // No is hi maximilian because it cant find name here.
}

let name = 'Maximilian';

username = 'Manuel';

greetUser();

// RECURSION

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// console.log(powerOf(2, 3)); // 2 * 2 * 2

// this is a recursive function, every time it reduces n because we have to multiply x * x only 3 times.
// function powerOf(x, n) {
//   if (n === 1) {
//     return x;
//   }
//   return x * powerOf(x, n - 1);
// }

// console.log(powerOf(2, 3)); // 2 * 2 * 2

// Even shorter way
function powerOf(x, n) {
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2

// Practical use, this or a folder structure

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          //could   friends: etc etc
          friends: [
            {
              name: 'Hari',
            },
            {
              name: 'Emilia',
            },
          ],
        },
      ],
    },
    {
      name: 'Julia',
      // etc etc
    },
  ],
};

// This is not feasable because we would need as many for loop as nesting levels at best, and at
// worst if a friend doesnt have friends, friends will be undefined
// function printFriendNames(person) {
//   for(const friends of person.friends) {
//     for(const friendsFriends of friends.friends){
//       for(){}
//     }
//   }
// }

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself)); // ["Manuel", "Chris", "Hari", "Emilia", "Julia"]
