var app = app || {};

app.Game = Backbone.Model.extend({
  defaults:{
    name:"",
    platform:"",
    release:"",
    genre:"",
    link: "/"
  },
  initialize: function(){
    //console.log("A model with name " + this.get("name") + " has been created.");
    this.on("change:rating",function(){//not used yet
      console.log("Rating has been changed.");
    });
  }
});
