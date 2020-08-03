const button = document.querySelector("button");

// Dont use these two, use addEventListener

// button.onClick = function() {

// }

const onButtonClick = () => {
  alert("Button clicked");
};

// button.onclick = onButtonClick;

button.addEventListener("click", onButtonClick); 

setTimeout(() => {
  // * cant use () => {} because they would be 2 different functions 
  // aka objects, need a variable that contains one. 
  // Cant use .bind(this) for the same reason, also need to be store in the same variable
  button.removeEventListener("click", onButtonClick); // *
}, 2000);
