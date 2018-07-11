$(document).ready(()=>{
  controller.init();
});

var model = {
  states: {
    csvRecords: [],
    filterOn: false,
    filters: []
  },
  
  post: (input) => {
    jQuery.post('http://127.0.0.1:3000/hi', {data: input}, (data) => {
      model.states.csvRecords = data;
      view.renderCSVReport();
    });
  }
};


var controller = {
  setListener: (el, events) => {
    events.forEach( event => {
      $('' + el).on(event.on, event.handler);
    });
  },
  
  init: () => {
    for (var el in controller.elements) {
      controller.setListener(el, controller.elements[el]);
    }
  },
  
  elements: {
    '#json-input': [
      {
        on: 'submit', 
        handler: (e) => {
          e.preventDefault();
          var val = $('#inputVal').val(); 
          model.post(val);
        }
      }
    ],
    
    '#filter-input': [
      {
        on: 'submit',
        handler: (e) => {
          e.preventDefault();
          var val = $('#filterVal').val();
          $('#filterVal').val('');
          model.states.filterOn = true;
          model.states.filters.push(val);
          view.renderFilteredWord(val);
          view.renderCSVReport (); 
        }
      },
      {
        on: 'reset',
        handler: (e) => {
          e.preventDefault();
          model.states.filterOn = false;
          model.states.filters = [];
          $('#filterVal').val('');
          $('#filters-entered').empty();
          view.renderCSVReport();
        }
      }
    ]
  }
};


var view = {
  renderRow: (row) => {
    var text = row.join(',');
    var $record = $('<div class="row">').text(text);
    $('#results').append($record);
  },
  
  renderCSVReport: (rows) => {
    var data;
    $('#results').empty();
    if (model.states.filterOn) {
      filteredData =  utils.filterCollectionByKeywords(model.states.csvRecords.slice(1), model.states.filters);
      data = [model.states.csvRecords[0]].concat(filteredData);
    } else{
      data = model.states.csvRecords;
    }
    
    data.forEach(row => view.renderRow (row));
  },
  
  renderFilteredWord: (word) => {
    var $word = $('<div>').text(word);
    $('#filters-entered').append($word);
  }
};

var utils = {
  findMatchInArray: (str, arr) => { //returns true if array contains target string
    return arr.some(item => {
      if (typeof item === 'number'){
        return item == str;
      } else {
        return !!item.match(new RegExp(str, 'i'))
      }
    });
  },
  
  filterCollectionByKeywords: (arrays, keywords) => { //returns only items that do not contain any element from keywords array
    return arrays.filter(arr => {
      return keywords.every(keyword => {
        return !utils.findMatchInArray(keyword, arr);
      });
    });
  }
};

