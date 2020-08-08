// // GET POST REQUESTS

// const listElement = document.querySelector('.posts');
// const postTemplate = document.getElementById('single-post');
// const form = document.querySelector('#new-post form');
// const fetchButton = document.querySelector('#available-posts button');
// const postList = document.querySelector('ul');

// function sendHttpRequest(method, url, data) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.setRequestHeader('Content-Type', 'application/json' );

//     // xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//     xhr.open(method, url);

//     // xhr.addEventListener(); Older broswer dont support it

//     xhr.responseType = 'json'; // Automatic parse, not always possible tho*

//     xhr.onload = () => {
//       if (xhr.status >= 200 && xhr.stats < 300) {
//         resolve(xhr.response);
//       } else {
//         xhr.response;
//         reject(new Error('Something went wrong!'));
//       }
//       // console.log(xhr.response);
//       // json to js = parse. js to json = stringify
//       // const listOfPosts = JSON.parse(xhr.response); //*
//     };

//     // This is for network error, not server error like a 404 because
//     // 404 is still a valid response, even if is not found.
//     // So you must check on the onload above
//     xhr.onerror = function () {
//       reject(new Error('Failed to send request!')); // only works if fail to send request
//       // console.log(xhr.response); // doesnt work for server errors
//       // console.log(xhr.status);  // doesnt work for server errors
//     };

//     xhr.send(JSON.stringify(data));
//   });
//   return promise;
// }

// async function fetchPosts() {
//   try {
//     const responseData = await sendHttpRequest(
//       'GET',
//       'https://jsonplaceholder.typicode.com/pos'
//     );

//     const listOfPosts = responseData;
//     for (const post of listOfPosts) {
//       const postEl = document.importNode(postTemplate.content, true);
//       postEl.querySelector('h2').textContent = post.title.toUpperCase();
//       postEl.querySelector('p').textContent = post.body;
//       postEl.querySelector('li').id = post.id;
//       listElement.append(postEl);
//     }
//   } catch (error) {
//     alert(error.message);
//   }
// }

// async function createPost(title, content) {
//   const userId = Math.random();
//   const post = {
//     title: title,
//     body: content,
//     userId: userId,
//   };

//   sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
// }

// fetchButton.addEventListener('click', fetchPosts); // could also use () => {fetchposts();}

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // avoid broswer submitting the form
//   const enteredTitle = event.currentTarget.querySelector('#title').value;
//   const enteredContent = event.currentTarget.querySelector('#content').value;

//   createPost(enteredTitle, enteredContent);
// });

// /* Without async await
// function fetchPosts() {
//   sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
//     (responseData) => {
//       const listOfPosts = xhr.response;
//       for (const post of listOfPosts) {
//         const postEl = document.importNode(postTemplate.content, true);
//         postEl.querySelector('h2').textContent = post.title.toUpperCase();
//         postEl.querySelector('p').textContent = post.body;
//         listElement.append(postEl);
//       }
//     }
//   );
// */

// // DELETE REQUEST

// postList.addEventListener('click', (event) => {
//   if (event.target.tagName === 'BUTTON') {
//     const postId = event.target.closest('li').id;
//     sendHttpRequest(
//       'DELETE',
//       `https://jsonplaceholder.typicode.com/posts/${postId}`
//     );
//   }
// });

// **************************************************************************

// Modern alternative to XML, the fetch API

// It is already a promise based api

// // GET POST REQUESTS

// const listElement = document.querySelector('.posts');
// const postTemplate = document.getElementById('single-post');
// const form = document.querySelector('#new-post form');
// const fetchButton = document.querySelector('#available-posts button');
// const postList = document.querySelector('ul');

// // fetch return a promise, get request, but it s a stream not parsed as js obj
// // so we need to use .json() on the response. (snapshot and then parse)
// function sendHttpRequest(method, url, data) {
//   return fetch(url, {
//     //  method: 'GET' // as default
//     method: method,
//     //    body: JSON.stringify(data),
//     body: data, // already knows is a FormData
//     // headers: {
//     //   'Content-Type': 'application/json', // standard
//     // },
//   })
//     .then((response) => {
//       // response.text(); stream to snapshot only
//       // response.blob(); for files
//       if (response.status >= 200 && response.status < 300) {
//         return response.json();
//       } else {
//         // need to return this promise to get the proper error propagation
//         // otherwise the error is thrown here, not the outside promise chain, l.381
//         return response.json().then((errData) => {
//           console.log(errData);
//           throw new Error('Something went wrong - server side.');
//         });
//         // throw new Error('Something went wrong - server side.'); // dont work here we miss errData access
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       throw new Error('Somethin went wrong!'); // This again wont work for 404 etc, only network issues
//     });
// }

// async function fetchPosts() {
//   try {
//     const responseData = await sendHttpRequest(
//       'GET',
//       'https://jsonplaceholder.typicode.com/posts'
//     );

//     const listOfPosts = responseData;
//     for (const post of listOfPosts) {
//       const postEl = document.importNode(postTemplate.content, true);
//       postEl.querySelector('h2').textContent = post.title.toUpperCase();
//       postEl.querySelector('p').textContent = post.body;
//       postEl.querySelector('li').id = post.id;
//       listElement.append(postEl);
//     }
//   } catch (error) {
//     alert(error.message);
//   }
// }

// async function createPost(title, content) {
//   const userId = Math.random();
//   const post = {
//     title: title,
//     body: content,
//     userId: userId,
//   };

//   // DEPENDS ON THE API
//   // If you dont append, js will try to collect the form data
//   // you need name="title" and name="body" in the <input> in the index.html
//   const formData = new FormData(form);
//   // formData.append('title', title);
//   // formData.append('body', content);
//   formData.append('userId', userId);
// //  formData.append('someFile', *filepath*, 'photo.png');

//   // sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
//   sendHttpRequest(
//     'POST',
//     'https://jsonplaceholder.typicode.com/posts',
//     formData
//   );
// }

// fetchButton.addEventListener('click', fetchPosts);

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const enteredTitle = event.currentTarget.querySelector('#title').value;
//   const enteredContent = event.currentTarget.querySelector('#content').value;

//   createPost(enteredTitle, enteredContent);
// });

// // DELETE REQUEST

// postList.addEventListener('click', (event) => {
//   if (event.target.tagName === 'BUTTON') {
//     const postId = event.target.closest('li').id;
//     sendHttpRequest(
//       'DELETE',
//       `https://jsonplaceholder.typicode.com/posts/${postId}`
//     );
//   }
// });

// ****************************************************************************

// AXIOS (also see lodash for arrays comparison utilities)
// Add this in index.html <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

// Return data ready to be use, dont need to parse json
// Unlike fetch and xml, automatically throw errors even for server side
// Automatically add headers for post requests

// GET POST REQUESTS

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: data,
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error('Something went wrong - server side.');
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error('Somethin went wrong!');
    });
}

async function fetchPosts() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    const listOfPosts = response.data;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
    // console.log(error.response);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const formData = new FormData(form);
  formData.append('userId', userId);

  const response = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    post // auto detect if need to use json or form data header and convert data
  );
  console.log(response);
}

fetchButton.addEventListener('click', fetchPosts);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

// DELETE REQUEST

postList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});
