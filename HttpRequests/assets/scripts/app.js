// HTTP REQUESTS

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.open(method, url);

    // xhr.addEventListener(); Older broswer dont support it

    xhr.responseType = 'json'; // Automatic parse, not always possible tho*

    xhr.onload = () => {
      resolve(xhr.response);
      // console.log(xhr.response);
      // json to js = parse. js to json = stringify
      // const listOfPosts = JSON.parse(xhr.response); //*
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/posts'
  );

  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchButton.addEventListener('click', () => { // could also use () => {fetchposts();}
  if (!listElement.hasChildNodes()) {
    fetchPosts();
  } else {
    const postItem = document.querySelectorAll('.post-item');
    for (const post of postItem) {
      listElement.removeChild(post);
    }
    fetchPosts();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // avoid broswer submitting the form
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

/* Without async await
function fetchPosts() {
  sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
    (responseData) => {
      const listOfPosts = xhr.response; 
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listElement.append(postEl);
      }
    }
  );
*/
