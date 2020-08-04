// const buttons = document.querySelectorAll('button');
const button = document.querySelector('button');

// // Dont use these two, use addEventListener

// // button.onClick = function() {

// // }

const onButtonClick = (event) => {
  //  event.target.disabled = true;
  console.log(event);
};

// // button.onclick = onButtonClick;

// button.addEventListener("click", onButtonClick);

// setTimeout(() => {
//   // * cant use () => {} because they would be 2 different functions
//   // aka objects, need a variable that contains one.
//   // Cant use .bind(this) for the same reason, also need to be store in the same variable
//   button.removeEventListener("click", onButtonClick); // *
// }, 2000);

const boundFn = onButtonClick.bind(this);
// button.addEventListener('click', onButtonClick)

// setTimeout(() => {
//   button.removeEventListener('click', onButtonClick)
// }, 2000)

// buttons.forEach((btn) => {
//   btn.addEventListener("mouseenter", onButtonClick);
// });

// // be carefull it consume a lot of memory
// // window.addEventListener("scroll", (event) => {
// //   console.log(event);
// // });

// window.addEventListener('click', () => {
//   console.log('window clicked')
// })

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

// Event Propagation: Capturing |v  then bubbling |^ , bubbling is the default so button then div

div.addEventListener('click', (event) => {
  console.log('Cicked div');
  console.log(event);
}); // true) // true is for capturing

button.addEventListener('click', function (event) {
  event.stopPropagation(); // Stop propg to the anchester elements
  // event.stopImmediatePropagation(); // Stop propg on all other listeners even of same element
  console.log('Cicked button');
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   })
// })

// Event delegation pattern
// Just use the bubbling propagation, only one listener not one foreach
list.addEventListener('click', function(event) {
  // event.target.classList.toggle('highlight');
  // event.currentTarget.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight'); // include the element itself
  // form.submit(); // wont execute the custom listener
  button.click();
  console.log(this) // refer to the list not the list item that u click
});
