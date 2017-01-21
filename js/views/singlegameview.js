var app = app || {};

app.SingleGameView = Backbone.View.extend({
  tagname:"article",
  className:"gameItem",
  template: _.template($("#game-item").html()),
  render: function(){
    var gameTemplate = this.template(this.model.toJSON());
    this.$el.html(gameTemplate);
    return this;
  }
});
