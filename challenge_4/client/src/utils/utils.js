var utils = {
 generateBoard: () => {
    var board = [];
    for (var i = 0; i < 7; i++){
      var column = [];
      for (var j = 0; j < 6; j++) {
        column.push(' ');
      }
      board.push(column);
    }
    return board;
  },
  
  find4InACol: (board, x, turn) => {
    var col = board[x].join('');
    var target = turn + turn + turn + turn;
    return col.includes(target);
  },
  
  find4InARow: (board, y, turn) => {
    var row = board.map((col, x) => board[x][y]).join('');
    var target = turn + turn + turn + turn;
    return row.includes(target);
  }
}

export default utils;