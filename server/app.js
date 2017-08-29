var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;


app.use(express.static('public'));
//random endpoint
///gifs/random

//giphy api key
//24f2517401a74269ba06343585cf5be3

app.listen(port, function(){
    console.log('server is running on port: ', port);
})