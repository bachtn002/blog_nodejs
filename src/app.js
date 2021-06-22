const upper = require('upper-case');
const mailer = require('nodemailer');
const express = require('express');
const morgan = require('morgan');
const expressHandlebar = require('express-handlebars');
const path = require('path');
const app = express();
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

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/error', (req, res) => {
  res.render('error');
});
app.get('/search', (req, res) => {
  console.log(req.query);
  res.render('search');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// const mysql = require('mysql');
// let conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'bachtn002',
//   database: 'blog_nodejs'
// });
// conn.connect((errors) => {
//   if (errors) throw errors;
//   console.log('Success!')});
//   // conn.query('CREATE DATABASE blog_nodejs',(errors,result)=>{
//   //   if(errors) throw errors;
//   //   console.log('Database created!');
//   // });
//   // conn.query('CREATE TABLE IF NOT EXISTS blog_e(Fullname VARCHAR(255),'+
//   // 'Address VARCHAR(255), Mobile VARCHAR(255))',(errors,result)=>{
//   //   if(errors) throw errors;
//   //   console.log('Table created!');
//   // });
//   // conn.query('ALTER TABLE blog ADD COLUMN BlogId '+
//   // 'BIGINT AUTO_INCREMENT PRIMARY KEY',(errors,result)=>{
//   //   if(errors) throw errors;
//   //   console.log('Table altered!');
//   // });
// });

