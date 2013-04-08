Game.Views.HandView = Backbone.View.extend({
  el: "#hand-div",

  initialize: function () {
    _.bindAll(this, 'render');
    this.bindTo(this.collection, "add", this.render);
  },

  render: function () {
    var $el = $(this.el),
    self = this;
    $el.empty();

    this.collection.forEach(function (card) {
      var cardView = new Game.Views.CardView({model: card});
      $el.append(cardView.el);
    });
  }
});