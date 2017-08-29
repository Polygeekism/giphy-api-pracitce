var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var giphyRouter = require('./routes/giphyRouter')


app.use(express.static('public'));
//random endpoint
///gifs/random
app.use('/giphy', giphyRouter);

//giphy api key


app.listen(port, function(){
    console.log('server is running on port: ', port);
})