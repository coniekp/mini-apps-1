$(document).ready(()=>{
  
  var $submit = $('form').on( 'submit', (e)=> {
    e.preventDefault();
    var val = $('textarea').val(); 
    post(val, renderRows);
  });

  post = (input, cb) => {
    jQuery.post('http://127.0.0.1:3000/hi', {data: input}, (data) => {
      cb(data);
    });
  }
  
  renderRows = (rows) => {
    rows.forEach(row => {
      var text = row.join(',');
      var $record = $('<div>').text(text);
      $('.results').append($record);
    });
  };
  
});
