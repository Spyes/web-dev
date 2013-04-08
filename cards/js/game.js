var Game = {
  Models: {},
  Views: {},
  Collections: {},

  initialize: function () {
    this.gameState = new Game.Models.GameState();
    statechart.initStates("beginning-phase");
  },

  playCard: function (card) {
    console.log("playing " + card.name);
  }
};