import React from 'react';
import Board from './board.jsx';
import utils from '../utils/utils.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: utils.generateBoard(),
      turn: 'red'
    }
  }
  
  handleClick(x, y) {
    if (this.state.board[x][5] === ' ' ) {
      this.setSquareColor(x);
    } else {
      console.log("Invalid");
    }
  }
  
  setSquareColor (x) {
    var color = this.state.turn === 'red'? 'red' :'yellow';
    var y;
    this.setState((prevState, props) => {
      y = prevState.board[x].indexOf(' ');
      prevState.board[x][y] = color;
      return {board: prevState.board};
    }, () => this.checkForWin(this.state.board, x, y, this.state.turn));
  }
  
  checkForWin (board, x, y, turn) {
    var colWin = utils.find4InCol(board, x, turn);
    var rowWin = utils.find4InRow(board, y, turn);
    var majorDiagWin = utils.find4InMajorDiag(board, x, y, turn);
    var minorDiagWin = utils.find4InMinorDiag(board, x, y, turn);
    var hasWin = colWin || rowWin || majorDiagWin || minorDiagWin;
    
    if(hasWin) this.endGame();
    else this.switchTurn();
  }
  
  endGame () {
    alert(this.state.turn + " wins!");
  }
  
  switchTurn () {
    this.setState ((prevState) => {
      var color = prevState.turn === 'red'? 'yellow':'red';
      return {turn: color};
    }, () => console.log(this.state.turn));
  }
  
  render () {
    return (
      <div>
        <h1>Connect Fo-o-o-or</h1>
        <Board board={this.state.board} handleClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;

