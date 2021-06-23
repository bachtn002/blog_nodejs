const upper = require('upper-case');
const mailer = require('nodemailer');
const express = require('express');
const morgan = require('morgan');
const expressHandlebar = require('express-handlebars');
const path = require('path');
const app = express();
const mongodb = require('./config/db/connectDb');

//Connect to db

mongodb.connect();
// Static files 
app.use(express.static(path.join(__dirname, 'public')));

//Template Engine
app.engine('hbs', expressHandlebar({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// HTTP logger
// app.use(morgan('combined'));
const port = 3000;

//Route init
const route = require('./routes/index.js');
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});