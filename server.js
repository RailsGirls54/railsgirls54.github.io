var express = require('express');
var app = express();

app.get('/', function(req, res){
    app.use(express.static(__dirname + "/landingpage"));
    res.sendfile(__dirname + '/landingpage/index.html');

});

app.listen(8080);
