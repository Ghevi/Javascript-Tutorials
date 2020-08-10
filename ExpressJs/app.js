const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // create the app

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next(); // move on to the next middleware (app.use())
});

app.use((req, res, next) => {
  const userName = req.body.username || 'Uknown user';
  res.render('index', {
    user: userName,
  });
});

app.listen(3000);
