import React from 'react';

var Scoreboard = (props) => (
  <div>
    <h3>Scores</h3>
    <button onClick={props.handleClick}>reset</button>
    <div>Red: 
      <span>{props.scores.red}</span>
    </div>
    <div>Yellow: 
      <span>{props.scores.yellow}</span>
    </div>
  </div>
)

export default Scoreboard;