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
  
  find4Consecutive: (arr, turn) => {
    var target = turn + turn + turn + turn;
    return arr.includes(target);
  },
  
  find4InCol: (board, x, turn) => {
    var col = board[x].join('');
    return utils.find4Consecutive (col, turn);
  },
  
  find4InRow: (board, y, turn) => {
    var row = board.map((col, x) => board[x][y]).join('');
    return utils.find4Consecutive(row, turn);
  }, 
  
  find4InMajorDiag: (board, x, y, turn) => {
    var diag = utils.getMajorDiag(board,x,y,turn);
    return utils.find4Consecutive(diag, turn); 
  },
  
  find4InMinorDiag: (board, x, y, turn) => {
    var diag = utils.getMinorDiag(board, x, y, turn);
    return utils.find4Consecutive(diag, turn); 
  },
  
  getMajorDiag: (board, x, y, turn) => {
    return board.map((col, currentX) => {
      var currentY = x+y-currentX;
      var sum = currentY+currentX;
      if(sum > 2 && sum < 9) return col[currentY];
      else return '';
    }).join('');
  },
  
  getMinorDiag: (board, x, y, turn) => {
    return board.map((col, currentX) => {
      var currentY = x-y + currentX;
      var difference = currentY-currentX;
      if(difference > -4 && difference < 3) return col[currentY];
      else return '';
    }).join('');
  }
}

export default utils;