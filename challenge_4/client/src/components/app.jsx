import React from 'react';
import Board from './board.jsx';
import utils from '../utils/utils.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: utils.generateBoard(),
      turn: 'red',
      count: 0,
      gameOver: ''
    }
  }
  
  handleClick(x, y) {
    if (this.state.board[x][5] === ' ' && !this.state.gameOver) {
      this.setSquareColor(x);
    } else {
      alert("Invalid move. Try again!");
    }
  }
  
  setSquareColor (x) {
    var color = this.state.turn === 'red'? 'red' :'yellow';
    var y;
    this.setState((prevState, props) => {
      y = prevState.board[x].indexOf(' ');
      prevState.board[x][y] = color;
      return {
        board: prevState.board,
        count: prevState.count + 1
      };
    }, () => this.checkEndGame (x,y));
  }
  
  checkEndGame (x, y) {
    if (this.state.count === 42) {
      this.setState({
        gameOver: 'Tied'
      })
    } else {
      this.checkForWin(this.state.board, x, y, this.state.turn);
    }
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
    this.setState({
      gameOver: this.state.turn + ' wins!'
    }, () => this.postWin());
  }
  
  switchTurn () {
    this.setState ((prevState) => {
      var color = prevState.turn === 'red'? 'yellow':'red';
      return {turn: color};
    });
  }
  
  postWin () {
    var url = 'http://127.0.0.1:3000/' + this.state.turn;
    fetch(url).then(() => console.log('sent'));
  }
  
  render () {
    return (
      <div>
        <h1>Connect Fo-o-o-or</h1>
        <Board board={this.state.board} handleClick={this.handleClick.bind(this)}/>
        <div>{this.state.gameOver}
        </div>
      </div>
    );
  }
}

export default App;

