var _cardDB           = {};
var _cardDB_keyID     = {}; //same as _cardDB, but keyed by card code instead of name
var _userInputElem    = $('#UserInput');
var _deckID           = $('#DeckId');
var _SetSelection     = $('#SetSelection');
var _cardListElem     = $('#Cards');
var _cardListHtml     = '';


function selectTab(evt, tabLabel) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabLabel).style.display = "block";
  evt.currentTarget.className += " active";

  switch(tabLabel) {
    case "Desklist":
      buildFromDeckID();      
      break;
    case "Set":
      buildFromSet();
      break;
    case "Card List":
      buildFromCardList();
      break;
  }
}

function loadCards() {
  _cardDB = localStorage.getItem('cardsDB');
  _cardDB = JSON.parse(_cardDB);

  _cardDB_keyID = localStorage.getItem('cardDB_keyID');
  _cardDB_keyID = JSON.parse(_cardDB_keyID);
  
  if (!_cardDB) {
    fetchAllCards();
  } else {
    buildFromCardList();
  }
}

function saveCards() {
  localStorage.setItem('cardsDB', JSON.stringify(_cardDB));
  localStorage.setItem('cardDB_keyID', JSON.stringify(_cardDB_keyID));
}

function reset() {
  return fetchAllCards();
}

function fetchAllCards() {
  localStorage.removeItem('cardsDB');
  localStorage.removeItem('cardDB_keyID');
  _cardListElem.html('<span class="text-muted" data-loading>loading cards ...</span>');

  $.getJSON( "https://netrunnerdb.com/api/2.0/public/cards", function(response) {
    _cardDB = {};
    _cardDB_keyID = {};

    $.each(response.data, function(key, item) {
        var image = 'https://proxynexus.z27.web.core.windows.net/images/' + item.code + '.jpg';

        _cardDB[item.title.toLowerCase().replace(/:/g, '').replace(/\s/g, '__')] = {
          code: item.code,
          image: image
        }

        _cardDB_keyID[item.code] = {
          code: item.code,
          title: item.title,
          image: image
        }
    });
    
    saveCards();
    buildFromCardList();
  });
}

function fetchSetList() {
  $.getJSON( "json/packs.json", function(response) {
    $.each(response.data, function(key, item) {
      _SetSelection.append('<option value=' + item.code + '>' + item.name + '</option>');
      if (item.code === "sc19") {
        _SetSelection.val(item.code);
      }
    });
  });
}

function buildFromCardList() {
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
      html += newCard;
    } else {
      unfound++;
    }
  }
  
  if (unfound > 0) {
    html += '<p class="no-print text-muted">' + unfound + ' not found</p>';
  }
  
  if (_cardListHtml != html) {
    _cardListHtml = html;
    _cardListElem.html(_cardListHtml);
  } 
}

function buildFromDeckID() {
  var html = '';
  var deckInput = _deckID.val().toLowerCase();
  var deckidregex = /\d\d\d\d\d/;
  if (!_cardDB_keyID) {
    return false;
  }

  var match = deckidregex.exec(deckInput);
  if (match == null) return;

  var deckid = match[0];
  $.getJSON("https://netrunnerdb.com/api/2.0/public/decklist/" + deckid, function(response) {
    var input = response.data[0].cards;
    var keys = Object.keys(input);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] in _cardDB_keyID) {
        var card = _cardDB_keyID[keys[i]];
        for (var j = 0; j < input[keys[i]]; j++) {
          var newCard = '';
          newCard += '<a href="https://netrunnerdb.com/en/card/' + card.code + '" title="" target="NetrunnerCard">';
          newCard += '<img class="card" src="' + card.image + '" alt="' + card.code + '" />';
          newCard += '<span class="label print-hide">' + card.code + ' ' + card.title.replace(/__/g, ' ') + '</span>'; 
          newCard += '</a>'; 
          html += newCard;
        }
      }
    }

    if (_cardListHtml != html) {
      _cardListHtml = html;
      _cardListElem.html(_cardListHtml);
    }
  });
  _deckID.val(deckid);
}

function buildFromSet() {
  var html = '';
  var selectedSet = _SetSelection.val();

  if (!_cardDB_keyID) {
    return false;
  }

  $.getJSON( "json/pack/" + selectedSet + ".json", function(response) {
    response.forEach(function(card) {
      for (var i = 0; i < card.quantity; i++) {
        var image = 'https://proxynexus.z27.web.core.windows.net/images/' + card.code + '.jpg';
        var newCard = '';
        newCard += '<a href="https://netrunnerdb.com/en/card/' + card.code + '" title="" target="NetrunnerCard">';
        newCard += '<img class="card" src="' + image + '" alt="' + card.code + '" />';
        newCard += '<span class="label print-hide">' + card.code + ' ' + card.title + '</span>'; 
        newCard += '</a>'; 
        html += newCard;
      }
    });

    if (_cardListHtml != html) {
      _cardListHtml = html;
      _cardListElem.html(_cardListHtml);
    }
  });
}

function assignEvents() {
  _userInputElem.on('input',function(e){
    buildFromCardList();
  });

  _deckID.on('input',function(e){
    buildFromDeckID();
  });

  _SetSelection.on('input',function(e){
    buildFromSet();
  });
}

$(function() {
  document.getElementById("defaultOpen").click();
  _userInputElem.text("MKUltra\nParagon\nHayley Kaplan: Universal Scholar");
  assignEvents();
  loadCards();
  fetchSetList();
});