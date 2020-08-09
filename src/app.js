// import 'core-js/features/promise';

const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;
  const promise = new Promise();
  console.log(promise);

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert('Feature not available, please copy manually!');
  }
});

// Solution: Polyfills

// Could use polyfills package that teaches older browser to use a feature
// by using workaround code that do the same thing.

// Solution: Transpilation

// For core feature of modern javascript like let, const, ()=>{}
// There is no way to rewrite this with other tools
// So we transpile the code, like in angular ts to js, with for example Babel
// Babel can be integrated in the webpack workflow

// Best solution: automatic detect + polyfills with Babel
