// const ids = new Set([1, 2, 3]);
// ids.add(2); // dont add duplicates
// console.log(ids);
// console.log(ids.has(2));
// ids.delete(1);

// // Can also use ids.values() so gives only one
// for (const entry of ids.entries()) { // entries return entry, entry so it can be swapped with a map easily
//   console.log(entry); // entry[0] or entry[1] gives one of the two
// }

// const person1 = { name: "Max" };
// const person2 = { name: "Manuel" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// // instead of entry with use distructoring to pull keys and values
// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size);

// ...and the other methods

/* Maps vs Objects

Maps can use any values and types as key, Objects only strings, numbers or symbols
Better performance for large quantities of data, better for small and medium-sized data (~50)
Better for adding and removing data frequently, easier and quicker to create

*/

// WEAKSETS & WEAKMAPS
// must add objects/arrays
// usefull when we still need the set but not some objects in the set
// so we can get read of them and let them be garbage collected from the heap

let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

// ...some operations
// person = null;

// only have 3 methods
console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null; 

console.log(personData);