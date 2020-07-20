const numbers = [1, 2, 3, 4, 5, 6];

const numbersGreater5 = numbers.filter((val) => val > 5);
console.log(numbersGreater5);

const mappedNumbers = numbers.map((val) => ({ num: val }));
console.log(mappedNumbers);

const multiplication = numbers.reduce((prevVal, curVal) => prevVal * curVal, 1);
console.log(multiplication);

function findMax (...nums) { // rest parameter
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
};

console.log(findMax(...numbers)); // spread operator

function findMinMax (...nums) { // rest parameter
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
};

const [minNum, maxNum] = findMinMax(...numbers); // destructoring
console.log(minNum, maxNum);

// Set usefull for unique values
const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);