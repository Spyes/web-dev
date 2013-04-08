Game.Views.CardView = Backbone.View.extend({
  tagName: 'img',

  events: {
    'mouseover': 'onMouseOver',
    'click': 'onClickCard'
  },

  initialize: function () {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function () {
    this.$el.attr({
      src: this.model.src,
      alt: this.model.description
    });
  },

  onMouseOver: function (e) {
    e.stopPropagation();
    e.preventDefault();

    statechart.sendEvent('hoverOverCard', this.model);
  },

  onClickCard: function (e) {
    e.stopPropagation();
    e.preventDefault();

    statechart.sendEvent('clickCard', this.model);
  },
});