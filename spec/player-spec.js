var Player = require('./../js/player.js').playerModule;

describe('Player', function() {
  var player;

  beforeEach(function(){
    player = new Player('javi', 2, 3);
  })

  it('should test whether a Player has three sides', function() {
    expect(player.player).toEqual('javi')
  });
});
