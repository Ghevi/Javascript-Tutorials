// COOKIES

// Only available if the page is served with a server
// Cookies with the httpOnly flag, cant be shown client side

const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = { name: 'Max', age: 30 };

  // document.cookie = `uid=${userId}; expires=`; // add new entry, set exp date in Date format
  document.cookie = `uid=${userId}; max-age=360`; // add new entry, set exp date in seconds
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrieveBtn.addEventListener('click', () => {
  // console.log(document.cookie.split(';')); // it returns a string so we can edit it
  const cookieData = document.cookie.split(';');
  const data = cookieData.map((i) => {
    return i.trim();
  });
  console.log(data[1].split('=')[1]); // user value
  // console.log(data.included('...').split('=')[1]); // this is better because of how 
  // the order of cookies changes when some of them expires
});
