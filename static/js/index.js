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

function isMobileBrowser() {
  var check = false;
  (function(a){ 
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
    check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
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

  if(isMobileBrowser()){ alert("Welcome to Proxy Nexus!\n\nThis website isn't designed for mobile.\nFor the best experience, use Google Chrome on a computer :)"); }
});