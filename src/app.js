const express = require('express');
const morgan = require('morgan');
const expressHandlebar = require('express-handlebars');
const path= require('path');
const app = express();
//Template Engine
app.engine('hbs',expressHandlebar({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// HTTP logger
app.use(morgan('combined'));
const port = 3000;

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});