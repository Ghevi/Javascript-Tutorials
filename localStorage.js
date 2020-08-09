// SESSION STORAGE AND LOCAL STORAGE

// Local storage mantain the data, session storage lose it when the tab is closed
// Users can clear these storages, so use them for UX.

const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

storeBtn.addEventListener('click', () => {
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user)); // "{}", just user would give object Object
});

retrieveBtn.addEventListener('click', () => {
  const extractedId = sessionStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));

  if (extractedId && extractedUser) {
    console.log(`Got the id - ${extractedId}`);
    // carefull to pass two arguments, not + (concatenation) or `${}`, otherwise extractedUser 
    // will be converted to a string, therefor you will see object Object in the console.
    console.log('Got the user - ', extractedUser);
  } else {
    console.log('Could not find the id...');
    console.log('Could not find the user...');
  }
});
