// REFLECT API

// const course = {
//   title: 'Javascript course',
// };

// Reflect.setPrototypeOf(course, {
//   toString() {
//     return this.title;
//   },
// });

// Reflect.defineProperty(course, 'price', {descriptors.....})

// Reflect. is like Object. but it is new and 2 advantages, like giving back
// errors if a method fails instead of undefined or nothing. Also it contains
// all the features you need to work with objects

// Object.deleteProperty(); // Error: It is not a function
// delete course.title // older way, just use Reflect.deleteProperty()

// Reflect.deleteProperty(course, 'title'); // return true or false if succeded

// console.log(course.toString());

// *****************************************************************************

// PROXY API

// Create traps for object operations, like an interceptor

const course = {
  title: 'Javascript course',
};

// Traps
const courseHandler = {
  // everytime someone access a property of course
  get(obj, propertyName) {
    console.log(propertyName);
    // return obj[propertyName]; // return Javascript course
    // return 'something';
    if (propertyName === 'length') {
      return 0;
    }
    return obj[propertyName] || 'NOT FOUND';
  },
  set(obj, propertyName, newValue) {
    console.log('Sending data to servers...')
    if (propertyName === 'rating') {
      return;
    }
    obj[propertyName] = newValue;
  },
};

// Reflect.deleteProperty(course, 'title'); // with this we ^return NOT FOUND

const pCourse = new Proxy(course, courseHandler); // wrap an object around the course object

pCourse.rating = 5;

console.log(pCourse.title, pCourse.length, pCourse.rating);

// These two are unchanged by the proxy, only if i access .title then title is changed
console.log(course, pCourse);

// More traps on MDN
// These are not getters or setters, they are only focused each on only one property 