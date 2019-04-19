var _cardDB           = {};
var _cardDB_keyID     = {}; //same as _cardDB, but keyed by card code instead of name
var _cardListTextArea;
var _deckURLText;
var _setSelection;
var _cardImgBox;
var _playsetSelection = "Single Set";
var _cardListHtml     = '';
var _cardList         = [];

const IMAGE_BASE_DIR = "https://proxynexus.blob.core.windows.net/";
const NRDB_API_DIR = "https://netrunnerdb.com/api/2.0/public/";
const IMAGE_CONTAINER = "low-images/";

function selectTab(tabLabel) {
  switch(tabLabel) {
    case "Card List":
      buildFromCardList();
      break;
    case "Set":
      buildFromSet();
      break;
    case "NetrunnerDB":
      if (_deckURLText.val() != "") {
        buildFromDeckID(); 
      }
      break;
  }
}

function selectPlayset(tabLabel) {
  var i, tabsets;
  tabsets = document.getElementsByClassName("tabsets");
  for (i = 0; i < tabsets.length; i++) {
    tabsets[i].className = tabsets[i].className.replace(" active", "");
  }
  _playsetSelection = tabLabel;
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
  _cardImgBox.html('<span class="text-muted" data-loading>loading cards ...</span>');

  $.getJSON(NRDB_API_DIR + "cards", function(response) {
    _cardDB = {};
    _cardDB_keyID = {};

    $.each(response.data, function(key, item) {
        var image = IMAGE_BASE_DIR + IMAGE_CONTAINER + item.code + '.jpg';

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
      _setSelection.append('<option value=' + item.code + '>' + item.name + '</option>');
      if (item.code === "sc19") {
        _setSelection.val(item.code);
      }
    });
  });
}

function buildFromCardList() {
  var html = '';
  var input = _cardListTextArea.val().toLowerCase().split(/\n/);
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
      if (count > 6) {
        count = 6;
      } else if (count < 1) {
        count = 1;
      }
      for (var j=0; j<count; j++) {
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
    _cardImgBox.html(_cardListHtml);
  } 
}

function buildFromDeckID() {
  if (!_cardDB_keyID) {
    return false;
  }

  const deckInput = _deckURLText.val().toLowerCase();
  const publishedDeckIDRegex = /(\/en\/decklist\/)(\d+)/;
  const unpublishedDeckIDRegex = /(\/deck\/view\/)(\d+)/;

  var match = publishedDeckIDRegex.exec(deckInput);
  var published = true;
  if (match == null) {
    match = unpublishedDeckIDRegex.exec(deckInput);
    published = false;
    if (match == null) return;
  }

  var deckid = match[2];
  if (published) {
    $.getJSON(NRDB_API_DIR + "decklist/" + deckid, function(response) {
      makeCardHTML(response);
    });
  } else {
    $.getJSON(NRDB_API_DIR + "deck/" + deckid, function(response) {
      makeCardHTML(response);
    });
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
    _cardImgBox.html(_cardListHtml);
  }
}

function buildFromSet() {
  var html = '';
  var selectedSet = _setSelection.val();
  const coreSets = ["core", "core2", "sc19"];

  if (!_cardDB_keyID || !selectedSet) {
    return false;
  }

  var playsetDisplay = document.getElementById("playsetDisplay");
  if (coreSets.indexOf(selectedSet) > -1) {
    playsetDisplay.style.display = "block";
  } else {
    playsetDisplay.style.display = "none";
  }
  
  $.getJSON( "json/pack/" + selectedSet + ".json", function(response) {
    response.forEach(function(card) {
      var quantity = card.quantity;

      if (coreSets.indexOf(selectedSet) > -1 && _playsetSelection == "Playset") {
        quantity = 3;
      }

      for (var i = 0; i < quantity; i++) {
        var image = IMAGE_BASE_DIR + IMAGE_CONTAINER + card.code + '.jpg';
        html += buildCardHTML(card.code, image, card.title);
      }
    });

    if (_cardListHtml != html) {
      _cardListHtml = html;
      _cardImgBox.html(_cardListHtml);
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
      const img = IMAGE_BASE_DIR + IMAGE_CONTAINER + extra + '.jpg';
      newCard += '<a href="https://netrunnerdb.com/en/card/' + code + '" title="" target="NetrunnerCard">';
      newCard += '<img class="card" src="' + img + '" alt="' + code + '" />';
      newCard += '<span class="label print-hide">' + code + ' ' + title + '</span>'; 
      newCard += '</a>';
    });
  } else if (code == "09001") {
    const syncBack = IMAGE_BASE_DIR + IMAGE_CONTAINER + '09001a.jpg';
    newCard += '<a href="https://netrunnerdb.com/en/card/' + code + '" title="" target="NetrunnerCard">';
    newCard += '<img class="card" src="' + syncBack + '" alt="' + code + '" />';
    newCard += '<span class="label print-hide">' + code + ' ' + title + '</span>'; 
    newCard += '</a>';
  }
  return newCard;
}

function assignEvents() {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
    var currentTab = $(e.target).text(); // get current tab
    selectTab(currentTab);
  });

  $(".playset-btn").click(function(event) {
    selectPlayset(event.target.value);
  })

  _cardListTextArea.on('input',function(e){
    buildFromCardList();
  });

  _deckURLText.on('input',function(e){
    buildFromDeckID(true);
  });

  _setSelection.on('input',function(e){
    buildFromSet();
  });
}

$(function() {
  _cardListTextArea = $('#cardListTextArea');
  _deckURLText = $('#deckURLText');
  _setSelection = $('#setSelection');
  _cardImgBox = $('#cardImgBox');

  assignEvents();
  loadCards();
  fetchSetList();

  if (!_cardDB) {
    _cardListTextArea.val("MKUltra\nParagon\nHayley Kaplan: Universal Scholar");
  } else {
    // if cardDB has been loaded, pick 3 random cards for home page
    var chosenCards = [];
    for (var i=0; i<3; i++) {
      const rand_index = Math.floor(Math.random() * Object.keys(_cardDB).length);
      const cards = Object.values(_cardDB);
      const card = cards[rand_index];
      chosenCards[i] = card.title;
    }
    _cardListTextArea.val(chosenCards[0] + "\n" +
                        chosenCards[1] + "\n" + 
                        chosenCards[2] + "\n");
  }
});