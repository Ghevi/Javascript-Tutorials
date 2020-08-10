// const http = require('http');

// // commonly used to listen to request not sending them

// const server = http.createServer((req, res) => {
//   // res.setHeader('Content-Type', 'text/plain'); // text/plain is not parsed as html
//   res.setHeader('Content-Type', 'text/html');
//   // res.write('Hello there');
//   // res.write('<h1>Hello there</h1>');
//   res.end();
// });

// server.listen(3000); // localhost:3000

// **********************************************************************

const http = require('http');

const server = http.createServer((req, res) => {
  let body = [];

  // console.log(req.method, req.url);

  // on is like addEventListener and data is an event
  req.on('data', (data) => {
    body.push(data);
  });

  req.on('end', () => {
    body = Buffer.concat(body).toString(); // conver to string
    // console.log(body);

    let userName = 'Uknown user';

    if (body) {
      userName = body.split('=')[1];
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(
      `<h1>Hi ${userName}</h1> <form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>`
    );
    res.end();
  });
});

server.listen(3000);
