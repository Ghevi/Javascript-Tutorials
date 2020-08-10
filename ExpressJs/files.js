const fs = require('fs'); // File System module

// setTimeout(); // available globally
// dcoument. // doesnt work

fs.readFile('user-data.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data.toString());
  }
});

fs.writeFile('user-data.txt', 'username=Ghevi', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Wrote to file');
  }
});

