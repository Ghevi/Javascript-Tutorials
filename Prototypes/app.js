// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson{
//   name = "Max";

//   constructor() {
//     super();
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old"
//     );
//   }
// }

// Constructor function: Classes are just sintactic sugar for these functions
function Person() {
  // Capital P
  // this = {}; what new does
  this.age = 30;
  this.name = "Max";
  this.greet = function () {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old"
    );
  };
  // return this; what new does
}

// This is done by extends
// Person.protoype is set like this in when calling super() in Person class
// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// }; // will be logged ad {printAge: ƒ}

// The code above overwrite the original constructor so this is better
Person.prototype.printAge = function () {
  console.log(this.age);
}; // will be logged as {printAge: ƒ, constructor: ƒ}

console.dir(Person);

const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__ === Person.prototype); // they are the same obj but different fallback obj which is __proto__
console.log(person.__proto__);
const person2 = new person.__proto__.constructor(); // usefull if we cant access the original constructor anymore
console.log(person2);
