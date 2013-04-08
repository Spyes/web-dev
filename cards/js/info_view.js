Game.Views.InfoView = Backbone.View.extend({
  el: "#info-pane-div",

  initialize: function () {
    //Game.gameState.bind("change", this.render, this);
    _.bindAll(this, 'render');
    this.bindTo(Game.gameState, "change", this.render);
  },

  render: function () {
    this.$el.html("");
    
    if (Game.gameState.get('info-show-card') !== -1) {
      this.$el.html("<img src='" + Game.gameState.get('info-show-card') + "'>");
    }
  }
});