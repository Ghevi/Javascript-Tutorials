class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = "Max";

  constructor() {
    // super();
    this.age = 30;
    // this.greet = function() {...} // this is a note
  }

  // ^+^  For < 100~1000 objects
  // This way every object will have greet recreated so it cost a bit of performance
  // but it is easier to add event listeners because of the way this works with =>
  // arrow function => will make sure this refer to the sorrounding object so .bind() isnt required
  // greet = function () { // dont use this one because "this" would be tricky to manage and
  // refer to what called the method not the class, so the button not Person class
  greet = () => {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " years old"
    );
  };

  // T.T
  // If use this code, you need .bind();
  // greet() {
  //   console.log(
  //     "Hi, I am " + this.name + " and I am " + this.age + " years old"
  //   );
  // }
}

// This is now the same as above classes
// function Person() {
//   this.age = 30;
//   this.name = "Max";
// }

// *-* Prototype function improved, only fields are recreated over and over for
// every obj not this method
Person.prototype.greet = function () {
  console.log("Hi, I am " + this.name + " and I am " + this.age + " years old");
};

// // Constructor function: Classes are just sintactic sugar for these functions
// // Capital P
// function Person() {
//   // this = {}; what new does
//   this.age = 30;
//   this.name = "Max";
//   this.greet = function () {
//     console.log(
//       "Hi, I am " + this.name + " and I am " + this.age + " years old"
//     );
//   };
//   // return this; what new does
// }

// // Add this method as static method to Person constructor function
// Person.describe = function () {
//   console.log("Creating persons...");
// };

// This is done by extends
// Person.protoype is set like this in when calling super() in Person class
// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// }; // will be logged ad {printAge: ƒ}

// // The code above overwrite the original constructor so this is better
// Person.prototype.printAge = function () {
//   console.log(this.age);
// }; // will be logged as {printAge: ƒ, constructor: ƒ}

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__ === Person.prototype); // they are the same obj but different fallback obj which is __proto__
// console.log(person);
// console.log(person.toString());
// const person2 = new person.__proto__.constructor(); // usefull if we cant access the original constructor anymore
// console.log(person2);

// console.dir(Object); // everything in Object is static methods and static properties

// // This is where the prototype chain ends
// console.dir(Object.prototype); // the fallback of all objects is this, not just Object itself or we could see its methods and properties

// const person = new Person();
// const person2 = new Person();
// person.greet()
// console.log(person);
// // *-* By having the same prototype for methods, it improve performance for obj creation
// console.log(person.__proto__ === person2.__proto__);

// const button = document.getElementById('btn');
// // button.addEventListener('click', person.greet.bind(person)); // T.T
// button.addEventListener('click', person.greet); // ^+^ doesnt need bind

const course = {
  // new Object()
  title: "Javascript Course",
  rating: 10,
};

console.log(Object.getPrototypeOf(course)); // __proto__
console.log(
  Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course), // ensure the original prototype wont be replaced by the line below
    printRating: function () {
      console.log(`${this.rating}/10`);
    },
  })
);

// Creates obj with the prototype we define
const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    // *
    name: {
      configurable: true,
      enumerable: true,
      value: "Max",
      writable: true,
    },
  }
); // = {} with a twist

// student.name = "Max"; Done above with descriptor map *

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();

console.log(student);

course.printRating();
