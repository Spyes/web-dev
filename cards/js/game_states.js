var statechart = Stativus.createStatechart();
statechart.addState("#hand-view", {
  enterState: function () {
  },
  exitState: function () {
  },

  hoverOverCard: function (card_info) {
    var card_name = card_info.name;
    var card_desc = card_info.description;
    console.log(card_name + ": " + card_desc);
  }
});
statechart.initStates("#hand-view");
