'use strict';
require('dotenv').config();
var axios = require('axios');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));


function requestGames(searchTerm){

  let url = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&limit=20&offset=0&order=release_dates.date%3Adesc&search=";
  url += searchTerm;

  return axios({
    type: "GET",
    url: url,
    headers: {
      "X-Mashape-Key": process.env.KEY,
      "Accept": "application/json"
    }
  })
    .then(function (response) {//once data is returned
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

app.use('/', express.static(__dirname + '/'));

app.get('/games/:search', function(request,response){
  let term = request.params.search;
  requestGames(term).then(function(data){
    response.send(data);
  })
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));

});
