const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie, idx, movies) => {
    const movieEl = document.createElement("li");

    // These two are the same, check info exist in movie
    if (!("info" in movie)) {
      // if needed
    }
    if (movie.info === undefined) {
      // if needed
    }

    const { info, ...otherProps } = movie; // object destructoring + rest parameter
    console.log(otherProps);
    let { getFormattedTitle } = movie;
    let text = getFormattedTitle.apply(movie) + " - "; // apply uses an array apply(movie, [])
    for (const key in info) {
      // look below *
      if (key !== "title" && key !== '_title') {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);

    // const { title: movieTitle } = info;
    // let text = movie.getFormattedTitle() + " - "; // the this below in the obj refer to movie
    // getFormattedTitle = getFormattedTitle.bind(movie); // this will refer to movie and not window obj
    // let text = getFormattedTitle.call(movie, , ,) + " - "; // call multiple arguments , , ,

    // movieEl.textContent = movie.info.title;
    // let text = movie.info.title + " - ";
    // let text = info.title + " - ";
    // for (const key in movie.info) {
    //   text = text + `${key}: ${movie.info[key]}`;
    // }
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    // title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      // title, // title: title
      set title(val) {
        // setter, without this the property is read only
        if (val.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = val;
      },
      get title() {
        // getter
        return this._title.toUpperCase();
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    // it s the shorter of getFormattedTitle: function ()
    // dont user arrow function for this one because it doesnt bind this to anything
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase(); // this refer to the thing that access it
    },
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  renderMovies();
};

// const searchMovieHandler = function () {
const searchMovieHandler = () => {
  console.log(this); // searchBtn with function(), Window if we use => because arrow function dont know about this
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);

/* *
 here 'title' is the key that is also a string, just title wont work
 because it will search for a variable named title but there is none here
 so key would use the title property also, becasue the check would not matter
 keys get coerced to string
*/

// ----------------------------------------------------------------------------------------------
// **********************************************************************************************

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
