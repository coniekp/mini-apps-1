import React from 'react';

var Square = (props) => {
  var style = "square " + (props.class);
  
  return(
    <div className={style} onClick={()=>props.handleClick(props.x, props.y)}></div>
  )
};

var Column = (props) => {
  var squares = props.squares.map((square, i) => (
      <Square key={i} y={i} x={props.x} handleClick={props.handleClick} class={square}/>
    ) 
  );
  
  return <div className="column">{squares}</div>;
}

var Board = (props) => {
  
  var columns = props.board.map((col, i) => (
    <Column key={i} x={i} squares={col} handleClick={props.handleClick}/>
    ) 
  );
  
  return <div className="board">{columns}</div>;
}

export default Board;