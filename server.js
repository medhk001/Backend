// var sqlite3 = require('sqlite3');
// var mysql = require('mysql');
const cheerio = require('cheerio');
// const https = require('https');
// var http = require('http');
// var opn = require('opn');
// var fs = require('fs');
var express = require('express');
var app = express();
// var db = new sqlite3.Database(__dirname+'/DB/BGEBAY.db3', (err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log('Nice Day');
//   }
// });

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'me',
//   password : 'secret',
//   database : 'my_db'
// });
 
// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();

app.set('view engine', 'ejs');
//express static
app.use("/public",express.static('public'));

//login Page 
app.get('/login', function(req, res){

  res.render('login');
});

//login Page 
app.get('/contact', function(req, res){

  res.render('contact');
});

//Home Page 
app.get('/', function(req, res){

  res.render('index');
});
app.listen(1993);
