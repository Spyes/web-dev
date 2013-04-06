var Hand = Backbone.Collection.extend({
  model: Card,

  initialize: function (models, options) {
    this.bind("add", options.view.addCardLi);
  }
});