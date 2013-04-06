var Card = Backbone.View.extend({
  initialize: function (data) {
    this.name = data.name;
    this.description = data.description;
    this.src = data.src;
  }
});