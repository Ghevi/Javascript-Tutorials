// // Inside a library (common use case)

// const uid = Symbol('uid');
// console.log(uid);

// const user = {
//   // id: 'p1',
//   [uid]: 'p1',
//   name: 'Max',
//   age: 30,
// };

// user[uid] = 'p3'; // This works, so we should not exposed it.

// // In the app

// // user.uid = 'p2'; // This should not overwrite uid
// user.id = 'p2'; // This just add an id property

// console.log(user);

// console.log(user[Symbol('uid')]); // undefined
// console.log(Symbol('uid') === Symbol('uid')); // false

// **********************************************************************************

// Well-known Symbols

// Helpers Symbols built in javascript

// const uid = Symbol('uid');
// console.log(uid);

// const user = {
//   [uid]: 'p1',
//   name: 'Max',
//   age: 30,
//   [Symbol.toStringTag]: 'User',
// };

// user[uid] = 'p3';

// user.id = 'p2';

// console.log(user);

// console.log(user[Symbol('uid')]);
// console.log(Symbol('uid') === Symbol('uid'));

// console.log(user.toString()); // object Object -> object User

// ITERATORS

// const company = {
//   currentEmployee: 0,
//   employees: ['Max', 'Manu', 'Anna'],
//   next() {
//     if (this.currentEmployee >= this.employees.length) {
//       return { value: this.currentEmployee, done: true };
//     }
//     const returnValue = {
//       value: this.employees[this.currentEmployee],
//       done: false,
//     };
//     this.currentEmployee++;
//     return returnValue;
//   },
// };

// // console.log(company.next());
// // console.log(company.next());
// // console.log(company.next());
// // console.log(company.next());
// // console.log(company.next());

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

// GENERATORS & ITERABLES

const company = {
  // currentEmployee: 0,
  employees: ['Max', 'Manu', 'Anna'],
  // next() {
  //   if (this.currentEmployee >= this.employees.length) {
  //     return { value: this.currentEmployee, done: true };
  //   }
  //   const returnValue = {
  //     value: this.employees[this.currentEmployee],
  //     done: false,
  //   };
  //   this.currentEmployee++;
  //   return returnValue;
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while (!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee]; // Save the execution here for the next next() call
      currentEmployee++;
    }
  },
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// let employee = company.next();

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

// for (const employee of company) {
//   console.log(employee); // error: company is not iterable
// }

// the generator function generate a new object with a next() {}

// const it = company.getEmployee();  // getEmployee: function* employeeGenerator() {...}

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// With [Symbol.iterator]: function* employeeGenerator() {...}, now it is iterable
// The for of loop search for this symbol, use a generator function that return an iterator
// with the yielded employee.value. Js will call next() on it until done is false.
for (const employee of company) {
  console.log(employee);
}

// this now also work
console.log([...company]);

// Other examples: 