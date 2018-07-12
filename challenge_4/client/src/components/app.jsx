import React from 'react';
import Board from './board.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      board: this.generateBoard()
    }
  }
  
  generateBoard () {
    var board = [];
    for (var i = 0; i < 7; i++){
      var column = [];
      for (var j = 0; j < 6; j++) {
        column.push('');
      }
      board.push(column);
    }
    return board;
  }
  

  
  
  render () {
    return (
      <div>
        <h1>Connect Fo-o-o-or</h1>
        <Board board={this.state.board}/>
      </div>
    );
  }
}

export default App;

