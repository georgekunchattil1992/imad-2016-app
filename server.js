var morgan = require('morgan');
var path = require('path');
//app.use(morgan('combined'));
var express=require('express');
var app=express();

/*app.use(express.static('public'));
app.get('/',function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});*/

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

/* one way of including css
app.get('/css/style.css',function(req,res){
	res.sendFile(__dirname + '/css/style.css');
});*/

app.listen(8080,function(){
	console.log('app is listening on 8080 !');
});
