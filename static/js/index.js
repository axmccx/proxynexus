var _cardDB           = {};
var _cardDB_keyID     = {}; //same as _cardDB, but keyed by card code instead of name
var _userInputElem    = $('#UserInput');
var _deckID           = $('#DeckId');
var _deckView         = $('#DeckView');
var _SetSelection     = $('#SetSelection');
var _PlaysetSelection = "";
var _cardListElem     = $('#Cards');
var _cardListHtml     = '';
var _cardList         = [];

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
    case "Decklist":
      if (_deckID.val() != "") {
        buildFromDeckID(true); 
      }
      if (_deckView.val() != "") {
        buildFromDeckID(false); 
      }
      break;
    case "Set":
      buildFromSet();
      break;
    case "Card List":
      buildFromCardList();
      break;
  }
}

function selectPlayset(evt, tabLabel) {
  var i, tabsets;
  tabsets = document.getElementsByClassName("tabsets");
  for (i = 0; i < tabsets.length; i++) {
    tabsets[i].className = tabsets[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
  _PlaysetSelection = tabLabel;
  buildFromSet();
}

function loadCards() {
  _cardDB = localStorage.getItem('cardsDB');
  _cardDB = JSON.parse(_cardDB);

  _cardDB_keyID = localStorage.getItem('cardDB_keyID');
  _cardDB_keyID = JSON.parse(_cardDB_keyID);
  
  if (!_cardDB) {
    fetchAllCards();
  } else if (!('title' in _cardDB)) {
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
          title: item.title,
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
    var cardInputRegex = /([0-9] |[0-9]x )?(.*)/;
    var match = cardInputRegex.exec(input[i]);

    var count = $.trim(match[1]).replace(/x/g, '');
    var cardname = $.trim(match[2]).replace(/:/g, '').replace(new RegExp(' ', 'g'), '__');	

    if (cardname == '') {		       
      continue;		
    }

    if (cardname in _cardDB) {
      var card = _cardDB[cardname];
      if (count >= 3) {
        html += buildCardHTML(card.code, card.image, card.title);
        html += buildCardHTML(card.code, card.image, card.title);
        html += buildCardHTML(card.code, card.image, card.title);
      } else if (count == 2) {
        html += buildCardHTML(card.code, card.image, card.title);
        html += buildCardHTML(card.code, card.image, card.title);
      } else {
        html += buildCardHTML(card.code, card.image, card.title);
      }
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

function buildFromDeckID(published) {
  if (!_cardDB_keyID) {
    return false;
  }

  if (published) {
    var deckInput = _deckID.val().toLowerCase();
    var deckidregex = /(\/en\/decklist\/)(\d+)/;
  } else {
    var deckInput = _deckView.val().toLowerCase();
    var deckidregex = /(\/deck\/view\/)(\d+)/;
  }

  var match = deckidregex.exec(deckInput);
  if (match == null) return;

  var deckid = match[2];

  if (published) {
    $.getJSON("https://netrunnerdb.com/api/2.0/public/decklist/" + deckid, function(response) {
      makeCardHTML(response);
    });
    _deckView.val(""); 
  } else {
    $.getJSON("https://netrunnerdb.com/api/2.0/public/deck/" + deckid, function(response) {
      makeCardHTML(response);
    });
    _deckID.val(""); 
  }
}

// Used by buildFromDeckID for DRY, 
// need to re-work it so buildFromCardList and buildFromSet uses it too
function makeCardHTML(response) {
  var html = '';
  var input = response.data[0].cards;
  var keys = Object.keys(input);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in _cardDB_keyID) {
      var card = _cardDB_keyID[keys[i]];
      for (var j = 0; j < input[keys[i]]; j++) {
        html += buildCardHTML(card.code, card.image, card.title);
      }
    }
  }

  if (_cardListHtml != html) {
    _cardListHtml = html;
    _cardListElem.html(_cardListHtml);
  }
}

function buildFromSet() {
  var html = '';
  var selectedSet = _SetSelection.val();
  const coreSets = ["core", "core2", "sc19"];

  if (!_cardDB_keyID || !selectedSet) {
    return false;
  }

  var playsetDisplay = document.getElementById("PlaysetDisplay");
  if (coreSets.indexOf(selectedSet) > -1) {
    playsetDisplay.style.display = "block";
  } else {
    playsetDisplay.style.display = "none";
  }
  
  $.getJSON( "json/pack/" + selectedSet + ".json", function(response) {
    response.forEach(function(card) {
      var quantity = card.quantity;

      if (coreSets.indexOf(selectedSet) > -1 && _PlaysetSelection == "Full") {
        quantity = 3;
      }

      for (var i = 0; i < quantity; i++) {
        var image = 'https://proxynexus.z27.web.core.windows.net/images/' + card.code + '.jpg';
        html += buildCardHTML(card.code, image, card.title);
      }
    });

    if (_cardListHtml != html) {
      _cardListHtml = html;
      _cardListElem.html(_cardListHtml);
    }
  });
}

function buildCardHTML(code, image, title) {
  var newCard = '';
  newCard += '<a href="https://netrunnerdb.com/en/card/' + code + '" title="" target="NetrunnerCard">';
  newCard += '<img class="card" src="' + image + '" alt="' + code + '" />';
  newCard += '<span class="label print-hide">' + code + ' ' + title + '</span>'; 
  newCard += '</a>';
  if (code == "08012") {
    const extras = ["08012a", "08012", "08012b", "08012", "08012c"];
    extras.forEach(function(extra) {
      const img = "https://proxynexus.z27.web.core.windows.net/images/" + extra + ".jpg";
      newCard += '<a href="https://netrunnerdb.com/en/card/' + code + '" title="" target="NetrunnerCard">';
      newCard += '<img class="card" src="' + img + '" alt="' + code + '" />';
      newCard += '<span class="label print-hide">' + code + ' ' + title + '</span>'; 
      newCard += '</a>';
    });
  } else if (code == "09001") {
    const syncBack = "https://proxynexus.z27.web.core.windows.net/images/09001a.jpg";
    newCard += '<a href="https://netrunnerdb.com/en/card/' + code + '" title="" target="NetrunnerCard">';
    newCard += '<img class="card" src="' + syncBack + '" alt="' + code + '" />';
    newCard += '<span class="label print-hide">' + code + ' ' + title + '</span>'; 
    newCard += '</a>';
  }
  return newCard;
}

function assignEvents() {
  _userInputElem.on('input',function(e){
    buildFromCardList();
  });

  _deckID.on('input',function(e){
    buildFromDeckID(true);
  });

  _deckView.on('input',function(e){
    buildFromDeckID(false);
  });

  _SetSelection.on('input',function(e){
    buildFromSet();
  });
}

$(function() {
  document.getElementById("defaultOpen").click();
  document.getElementById("defaultSetTab").click()
  assignEvents();
  loadCards();
  fetchSetList();

  // pick 3 random cards for home page
  var chosenCards = [];
  for (var i=0; i<3; i++) {
    const rand_index = Math.floor(Math.random() * Object.keys(_cardDB).length);
    const cards = Object.values(_cardDB);
    const card = cards[rand_index];
    chosenCards[i] = card.title;
  }
  _userInputElem.text(chosenCards[0] + "\n" +
                      chosenCards[1] + "\n" + 
                      chosenCards[2] + "\n");
});