var express = require('express');
var router = express.Router();


var giphyApiKey = '24f2517401a74269ba06343585cf5be3';

router.get('/', function(req,res){
    console.log('hit the random get route');
    
    var getRandomGif = function(){
        var baseUrl = 'http://api.giphy.com/v1/gifs/random?';
        baseUrl += 'api_key='+ giphyApiKey; //api key

        get(baseUrl).then(function(response){
            console.log('random giphy:', response)
            res.send(response);
        });
    }
    getRandomGif();
})
//24f2517401a74269ba06343585cf5be3







module.exports = router;