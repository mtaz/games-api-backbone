var app = app || {};

app.GamesView = Backbone.View.extend({
  tagname: "section",
  render: function(){
    this.collection.each(this.addGame, this);
    return this;
  },
  addGame: function(game){
    var gameView = new app.SingleGameView({model: game});
    this.$el.append(gameView.render().el);
  }
});
