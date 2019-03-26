var _cardDB           = {};
var _userInputElem    = $('#UserInput');
var _cardListElem     = $('#Cards');
var _cardListHtml     = '';


// loadCards() load cardDB from local storage
function loadCards() {
  _cardDB = localStorage.getItem('cards');
  _cardDB = JSON.parse(_cardDB);
  
  if (!_cardDB) {
    fetchAllCards();
  } else {
    buildList();
  }
}

// saveCards() save cardDB in local storage
function saveCards() {
  localStorage.setItem('cards', JSON.stringify(_cardDB));
}

// reset alias
function reset() {
  return fetchAllCards();
}

// fetchAllCards() get cards from api
function fetchAllCards() {
  localStorage.removeItem('cards');
  _cardListElem.html('<span class="text-muted" data-loading>loading cards ...</span>');

  $.getJSON( "https://netrunnerdb.com/api/2.0/public/cards", function(response) {
    _cardDB = {};

    $.each(response.data, function(key, item) {
        var image = 'images/' + item.code + '.jpg';

        console.log(item);

        /* TODO allow alt art for reprinted cards */

        _cardDB[item.title.toLowerCase().replace(/:/g, '').replace(/\s/g, '__')] = {
          code: item.code,
          image: image
        }
    });
    
    console.log('cards fetched from api');
    saveCards();
    buildList();
  });
}

// buildList() generate image list
function buildList() {
  var html = '';
  var input = _userInputElem.val().toLowerCase().split(/\n/);
  var unfound = 0;
  
  if (!_cardDB) {
    return false;
  }
  
  for (var i=0; i<input.length; i++) {
    var cardname = $.trim(input[i]).replace(/:/g, '').replace(new RegExp(' ', 'g'), '__');	
    
    if (cardname == '') {		       
      continue;		
    }
    
    if (cardname in _cardDB) {
      var card = _cardDB[cardname];
      var newCard = '';

      newCard += '<a href="https://netrunnerdb.com/en/card/' + card.code + '" title="" target="NetrunnerCard">';
      newCard += '<img class="card" src="' + card.image + '" alt="' + card.code + '" />';
      newCard += '<span class="label print-hide">' + card.code + ' ' + cardname.replace(/__/g, ' ') + '</span>'; 
      newCard += '</a>'; 

      console.log(JSON.stringify(card) + ' ' + cardname);
      html += newCard;
    } else {
      unfound++;
    }
  }
  
  if (unfound > 0) {
    html += '<p class="no-print text-muted">' + unfound + ' not found</p>';
  }
  
  if (_cardListHtml != html) {
    // save current html
    _cardListHtml = html;
    // show images html
    _cardListElem.html(_cardListHtml);
  } 
} 

// assignEvents() rebuild image list when textarea changes
function assignEvents() {
  $(document).on('input propertychange', _userInputElem, function() {
    buildList();
  });  
}

assignEvents();
loadCards();