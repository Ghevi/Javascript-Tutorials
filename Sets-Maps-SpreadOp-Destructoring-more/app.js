// const prices = [10.99, 5.99, 3.99, 6.59];

// const data = "new york;10.99;2000";

// const transformedData = data.split(";");
// transformedData[1] = +transformedData[1];
// transformedData[2] = +transformedData[2];

// console.log(transformedData);

// const nameFragments = ["Max", "Lolman"];
// const name = nameFragments.join(" ");
// console.log(name);

// // copied the array
// const copiedNameFragments = [...nameFragments];
// nameFragments.push("Mr");
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(1, 5, -3));
// console.log(Math.min(prices)); // NaN
// console.log(Math.min(...prices)); // works

// const persons = [
//   { name: "Max", age: 30 },
//   { name: "Manuel", age: 31 },
// ];
// const copiedPersons = [...persons]; // copy the address of the elements
// // so if we change the elements in the copied array, the elements of the first array
// // gets changed also

// // this map objects to new objects
// const copiedPersonsObjects = persons.map((person) => ({
//   // dont need ... because map already return a new array
//   name: person.name,
//   age: person.age,
// }));

// // Should avoid this, only copy what you want to change and have the changes not reflected on
// // the original array
// // const personsWithHobbies = [
// //   { name: "Max", age: 30, hobbies: [] },
// //   { name: "Manuel", age: 31 },
// // ];

// // const copiedPersonsObjectsHobbies = persons.map((person) => ({
// //   // dont need ... because map already return a new array
// //   name: person.name,
// //   age: person.age,
// //   hobbies: [...person.hobbies],
// // }));

// persons.push({ name: "Anna", age: 29 });
// copiedPersons[0].age = 31;

// console.log(persons, copiedPersons);

// DESTRUCTORING
// const nameData = ["Max", "Lolman", "Mr", 30];
// // const firstName = nameData[0];
// // const lastName = nameData[1];

// const [firstName, lastName, ...otherInformation] = nameData; // this ... is the rest operator not spread one
// console.log(firstName, lastName, otherInformation);

