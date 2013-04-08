var statechart = Stativus.createStatechart();
statechart.addState("beginning-phase", {
  enterState: function () {
    Game.gameState.set('info-show-card', -1);
    Game.gameState.set('phase', 'beginning-phase');
//    Game.gameState.set('phase-name', 'Beginning');
  },
  exitState: function () {
  },

  hoverOverCard: function (card) {
    Game.gameState.set('info-show-card', card.src);
  },

  clickCard: function (card) {
    
  },

  clickDeck: function (deck, hand) {
    hand.add(deck.at(0));
    deck.remove(deck.at(0));
  },

  clickNextPhaseBtn: function () {
    this.goToState('main-phase-one');
  }
});

statechart.addState("main-phase-one", {
  enterState: function () {
    Game.gameState.set('phase', 'main-phase-one');
//    Game.gameState.set('phase-name', 'Main Phase one');
  },

  hoverOverCard: function (card) {
    Game.gameState.set('info-show-card', card.src);
  },

  clickCard: function (card) {
    Game.playCard(card);
  }

});
