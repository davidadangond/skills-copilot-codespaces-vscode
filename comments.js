// create web server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const router = require('./routes');

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// parse request body
app.use(express.urlencoded({ extended: false }));

// routes
app.use(router);

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});