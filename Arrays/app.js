// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(); // copy the array otherwise they would both point to the same address
// const storedResults = testResults.slice(0, 2);
// const storedResults = testResults.slice(-1, -3);
// const storedResults = testResults.slice(2);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 1.5, 10];
// const storedResults = testResults.concat([3.99, 2]); // push would push a nested array. Concat add the values in this array and return a copy

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5));

// // These two are the same
// console.log(testResults.includes(10.99));
// // console.log(testResults.indexOf(10.99) !== -1);

// // Doesnt work because after indexOf a new object is created and it has a different reference
// const personData = [{ name: "Max" }, { name: "Manuel" }];
// console.log(personData.indexOf({ name: "Manuel" }));

// const manuel = personData.find((person, index, persons) => {
//   // find doesnt create a copy
//   return person.name === "Manuel";
// });

// manuel.name = "Anna";

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, index, persons) => {
//   return person.name === "Max";
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// // This let us have the index to maybe add it to an object
// prices.forEach((price, index, prices) => {
//   const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, index, prices) => {
  const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
  return priceObj; // return new array
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  // by default it sort them as strings so we need the function inside
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sortedPrices, sortedPrices.reverse()); // use reverse or reverse the function logic ^

// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6; // return true therefor keeps prices > 6
// });

// shorter version
const filteredArray = prices.filter((price) => price > 6);

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue; // curValue is the first item in the array at start
//   // then prevValue hold the returned value of the last execution
//   // so now curValue is the second item in the array
// }, 0); // 0 -> initial value = prevValue

// shorter version
const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);  

console.log("Sum with reduce function: " + sum);
