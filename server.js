var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var express=require('express');
var app=express();

app.use(express.static('ui'));
app.get('/',function(req,res){
	res.sendFile(__dirname + '/ui/index.html');
});

/* one way of including css
app.get('/css/style.css',function(req,res){
	res.sendFile(__dirname + '/css/style.css');
});*/

/*app.get('/ui/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/css/bootstrap.min.css'));
});*/
/*app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});*/


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});




