var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

home = path.resolve('./frontend/html/home/home.html');
css = path.resolve('./frontend/css/home');
js = path.resolve('./frontend/js/home');
bootstrap = path.resolve('./node_modules/bootstrap');
jquery = path.resolve('./node_modules/jquery/dist');

app.use('/css', express.static(css));
app.use('/js', express.static(js));
app.use('/bootstrap', express.static(bootstrap));
app.use('/jquery', express.static(jquery));

server.listen(process.env.PORT || 3000);
console.log('Server running on port 3000');

app.get('/', function(req,res){
  res.sendFile(home);
});
