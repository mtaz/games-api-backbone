var app = app || {};

app.GamesCollection = Backbone.Collection.extend({
  model: app.Game,
  initialize: function(){
    //console.log("Collection has been created.");

  }
});
