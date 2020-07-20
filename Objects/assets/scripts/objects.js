const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title, // title: title
      [extraName]: extraValue,
    },
    id: Math.random()
  };

  movies.push(newMovie);
  console.log(newMovie);
};

addMovieBtn.addEventListener('click', addMovieHandler);

// const movieList = document.getElementById("movie-list");

// // Same
// // movieList.style.backgroundColor = 'red';
// // movieList.style['background-color'] = 'red';
// movieList.style["backgroundColor"] = "red"; // Save this key and keep the original background-color property

// movieList.style.display = "block";

// const userChosenKeyName = 'level'; // assume it's the user input so we dont know it in advance

// let person = {
//   "first name": "Max",
//   age: 30, // non keys properties are coerced to strings aswell
//   hobbies: ["Sports", "Cooking"],
//   [userChosenKeyName]: '',
//   greet: function () {
//     alert("Hi there!");
//   },
//   1.5: "hello",
// };

// // person.age = 31;
// delete person.age;
// // person.age = undefined; never do this, null would just reset the property not delete it
// person.isAdmin = true;

// console.log(person.age); // undefined

// // person.greet();

// console.log(person["first name"]); // square brackets notation to access keys instead of properties
// console.log(person[1.5]); // or '1.5' because numbers get coerced to strings

// const keyName = 'first name';
// console.log(person[keyName]);

// console.log(person);
