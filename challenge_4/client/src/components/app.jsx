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
    console.log(x, y);
    if (this.state.board[x][5] === ' ') {
      this.setSquareColor(x,y);

      //this.switchTurn();
    } else {
      console.log("Invalid");
    }
  }
  
  setSquareColor (x, y) {
    var color = this.state.turn === 'red'? 'red' :'yellow';
    
    this.setState((prevState, props) => {
      var y = prevState.board[x].indexOf(' ');
      prevState.board[x][y] = color;
      return {board: prevState.board};
    }, () => this.checkForWin(this.state.board, x, y, this.state.turn));
  }
  
  checkForWin (board, x, y, turn) {
    var has4InCol = utils.find4InACol(board, x, turn);
    var has4InRow = utils.find4InARow(board, y, turn);
    
    console.log( has4InRow);
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

