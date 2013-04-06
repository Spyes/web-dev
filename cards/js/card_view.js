var CardView = Backbone.View.extend({
  tagName: 'img',

  events: {
    'mouseover': 'onMouseOver'
  },

  initialize: function () {
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

    statechart.sendEvent('hoverOverCard', {name: this.model.name, description: this.model.description});
  }
});