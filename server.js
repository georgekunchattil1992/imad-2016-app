var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/css/bootstrap.min.css'));
});
app.get('/ui/css/animate.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/css/animate.min.css'));
});
app.get('/ui/css/creative.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/css/creative,css'));
}); 

app.get('/ui/js/jquery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/js/jquery.js'));
}); 
app.get('/ui/js/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/js/bootstrap.min.js'));
}); 
app.get('/ui/js/jquery.easing.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/js/jquery.easing.min.js'));
}); 
app.get('/ui/js/jquery.fittext.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/js/jquery.fittext.js'));
}); 
app.get('/ui/js/wow.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/js/wow.min.js'));
}); 
app.get('/ui/js/creative.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/js/creative.js'));
});

app.get('/ui/img/header.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'header.jpg'));
});
app.get('/ui/img/profile.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.jpg'));
});
/*app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});*/


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});




