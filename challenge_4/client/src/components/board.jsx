import React from 'react';

var Square = (props) => (
  <div className="square"></div>
)

var Column = (props) => {
  var squares = props.squares.map((square, i) => <Square key={i} x={i} y={props.y}/>);
  return (
    <div className="column">{squares}</div>
  );
}

var Board = (props) => {
  
  var columns = props.board.map((col, i) => <Column key={i} y={i} squares={col}/>);
  
  return (
    <div className="board">{columns}</div>
  );
}

export default Board;