Game.Models.Card = Backbone.Model.extend({
  initialize: function (data) {
    this.name = data.name;
    this.description = data.description;
    this.src = data.src;
  }
});