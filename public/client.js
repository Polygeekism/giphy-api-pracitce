var app = angular.module('GiphyApp',[]);

app.controller('GiphyController', ['$http', function($http){
    console.log('controller is loaded');

    var self = this;
    self.singleGif = {list:[]};
    var giphyApiKey = '24f2517401a74269ba06343585cf5be3';

    // self.getGif = function(){

    //     $http.get('/giphy').then(function(response){
    //         console.log(response);
    //         // self.singleGif.list = response.data;
    //         // console.log(self.singleGif.list.data[0].url);
    //         // self.displayUrl = self.singleGif.list.data[0].url;
    //     })
    // }
    self.getRandomGif = function(){
        var baseUrl = 'http://api.giphy.com/v1/gifs/random?';
        baseUrl += 'api_key='+ giphyApiKey; //api key

        $http.get(baseUrl).then(function(response){
            
            self.singleGif.list = response.data;
            console.log('giphy:', self.singleGif.list)
            
            self.displayUrl = self.singleGif.list.data.image_original_url;
            console.log(self.displayUrl);
        });
    }
}])
//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=24f2517401a74269ba06343585cf5be3&limit=1"