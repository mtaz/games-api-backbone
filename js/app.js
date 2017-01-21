//send request to serer with search term
function getGames(term){
  let url = "http://localhost:5000/games/:";
  url += term;
  return axios({
    type: "GET",
    url: url,

  }).then(function(response){
    createModAndColl(response.data);
  });
}

//creat instances of the model, add to collection, create view
function createModAndColl(d){
  //console.log(d);
  app.gamesCollection = new app.GamesCollection();
  app.models = {};//stores all model instances
  //create a model instance for each game in list
  d.forEach(function(game){
    app.models[game.id] = new app.Game({
      name: game.name,
      link: game.url,
      platform: platforms[game.release_dates[0].platform],
      release: game.release_dates[0].y,
      genre: (game.genres?game.genres.join(", "):""),
      image: {url: (game.cover?"http:" + game.cover.url||"":""),
              title: this.name,
              alt: this.name
             }
    });
    //add each new instance to the collection
    app.gamesCollection.add(app.models[game.id]);
  });
  //create the view
  app.gamesView = new app.GamesView({collection:app.gamesCollection});
  $("#games-list").html(app.gamesView.render().el);
}


//event listener triggers request when a user adds a searchterm and hits submit
$("#game-search").submit(function(e){
  e.preventDefault();
  let term = $("#search-input").val();
  term = term.trim().toLowerCase();
  if(term == ""){
    return;
  } else {
    getGames(term);

  }
});
