var assert = require('assert');
var App = require('../client/dist/bundle.js');

describe('App', function() {
  var $App = new App();
  describe ('board state', function () {
    it('should have a board state', function (){
      assert.equal(Boolean($board.state.board), true);
    });
  });
});