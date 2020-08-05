// Asynchronous code

// CALlBACKS

// const button = document.querySelector('button');
// const output = document.querySelector('p');

// function trackUserHandler() {
//   // console.log('Clicked!');
//   // third
//   navigator.geolocation.getCurrentPosition(
//     (posData) => {
//       setTimeout(() => {
//         console.log(posData);
//       }, 2000);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
//   // second
//   setTimeout(() => {
//     console.log('Timer done!');
//   }, 0);
//   console.log('Getting position...'); // execute first no matter what
// }

// button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

// PROMISES

// Allow to avoid callbacks hell where there are many callbacks and async functions
// nested in each others.

const button = document.querySelector('button');
const output = document.querySelector('p');

// Promisified version of getCurrentPosition
const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  // Promisifying a built-in api, setTimeout doesnt have a .then()
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

// Dont chain promises, instead return one in another
function trackUserHandler() {
  let positionData;
  getPosition()
    .then(
      (posData) => {
        positionData = posData;
        return setTimer(2000); // * Return another promise or we can return other type of data
      }
      // (err) => { // Can use this or catch(). Same skipping mechanism as the catch.
      //   console.log(err);
      // }
    )
    .catch((err) => {
      // if getPosition rejects, all the .then() before this catch will be skipped. positionData will be undefined
      console.log(err);
      return 'on we go...';
    })
    .then((data) => {
      // this will execute even if we catch an error
      console.log(data, positionData); // data = return setTimer(2000)*
    });

  setTimer(2000).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);


// ASYNC / AWAIT