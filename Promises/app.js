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

// const button = document.querySelector('button');
// const output = document.querySelector('p');

// // Promisified version of getCurrentPosition
// const getPosition = (opts) => {
//   const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (success) => {
//         resolve(success);
//       },
//       (error) => {
//         reject(error);
//       },
//       opts
//     );
//   });
//   return promise;
// };

// const setTimer = (duration) => {
//   // Promisifying a built-in api, setTimeout doesnt have a .then()
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, duration);
//   });
//   return promise;
// };

// // Dont chain promises, instead return one in another
// function trackUserHandler() {
//   let positionData;
//   getPosition()
//     .then(
//       (posData) => {
//         positionData = posData;
//         return setTimer(2000); // * Return another promise or we can return other type of data
//       }
//       // (err) => { // Can use this or catch(). Same skipping mechanism as the catch.
//       //   console.log(err);
//       // }
//     )
//     .catch((err) => {
//       // if getPosition rejects, all the .then() before this catch will be skipped. positionData will be undefined
//       console.log(err);
//       return 'on we go...';
//     })
//     .then((data) => {
//       // this will execute even if we catch an error
//       console.log(data, positionData); // data = return setTimer(2000)*
//     });

//   setTimer(2000).then(() => {
//     console.log('Timer done!');
//   });
//   console.log('Getting position...');
// }

// button.addEventListener('click', trackUserHandler);

// ASYNC / AWAIT

// const button = document.querySelector('button');
// const output = document.querySelector('p');

// // Promisified version of getCurrentPosition
// const getPosition = (opts) => {
//   const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (success) => {
//         resolve(success);
//       },
//       (error) => {
//         reject(error);
//       },
//       opts
//     );
//   });
//   return promise;
// };

// // const setTimer = async (duration) => { async go on the right with this expression
// const setTimer = (duration) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//     }, duration);
//   });
//   return promise;
// };

// // Automatically return a promise, is like doing const promise = new Promise (...) => {logic}
// // No code is blockd, this function now is a big wrapping promise
// // This way the code after getPosition().ecc.ecc so the setTimer(1000) get executed after the try catch
// // With the commented sintax, it s get executed right away. It s like if now we have another .then()
// // that contains setTimer(100) ecc. To solve this we have to move this part out in another function
// //
// // Can only be use inside functions with async. To be used outside we need an IIFE
// async function trackUserHandler() {
//   // let positionData;
//   let posData;
//   let timerData;

//   try {
//     const posData = await getPosition(); // replicate the first .then(...)
//     const timerData = await setTimer(2000); // replicate the second .then(...)
//   } catch (error) {
//     console.log(error);
//   }

//   console.log(timerData, posData);

//   // getPosition()
//   // .then((posData) => {
//   //   positionData = posData;
//   //   return setTimer(2000);
//   // })
//   // .catch((err) => {
//   //   console.log(err);
//   //   return 'on we go...';
//   // })
//   // .then((data) => {
//   //   console.log(data, positionData);
//   // });

//   // setTimer(1000).then(() => {
//   //   console.log('Timer done!');
//   // });
//   // console.log('Getting position...');
// }

// // IIFE: this is the same as setTimer(1000).then();
// async(function () {
//   await setTimer(1000);
// })();

// button.addEventListener('click', trackUserHandler);

const button = document.querySelector('button');
const output = document.querySelector('p');

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
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  let posData;
  let timerData;

  try {
    const posData = await getPosition();
    const timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
}

// IIFE: this is the same as setTimer(1000).then();
(async function () {
  await setTimer(1000);
})();

button.addEventListener('click', trackUserHandler);

// Execute only the faster promise
Promise.race([getPosition(), setTimer(1000)]).then((data) => {
  console.log(data);
});

// Combine the data returned by both promises, if one is rejected instead, the other is not executed
Promise.all([getPosition(), setTimer(1000)]).then((promiseData) => {
  console.log(promiseData);
});

// Combine the results regardless if one failing, giving then a summary of each one.
Promise.allSettle([getPosition(), setTimer(1000)]).then((promiseData) => {
  console.log(promiseData);
});
