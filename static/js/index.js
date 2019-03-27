var _cardDB           = {};
var _userInputElem    = $('#UserInput');
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
}

function loadCards() {
  _cardDB = localStorage.getItem('cards');
  _cardDB = JSON.parse(_cardDB);
  
  if (!_cardDB) {
    fetchAllCards();
  } else {
    buildList();
  }
}

function saveCards() {
  localStorage.setItem('cards', JSON.stringify(_cardDB));
}

function reset() {
  return fetchAllCards();
}

function fetchAllCards() {
  localStorage.removeItem('cards');
  _cardListElem.html('<span class="text-muted" data-loading>loading cards ...</span>');

  $.getJSON( "https://netrunnerdb.com/api/2.0/public/cards", function(response) {
    _cardDB = {};

    $.each(response.data, function(key, item) {
        var image = 'https://proxynexus.z27.web.core.windows.net/static/images/' + item.code + '.jpg';

        console.log(item);

        _cardDB[item.title.toLowerCase().replace(/:/g, '').replace(/\s/g, '__')] = {
          code: item.code,
          image: image
        }
    });
    
    // console.log('cards fetched from api');
    saveCards();
    buildList();
  });
}

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

      // console.log(JSON.stringify(card) + ' ' + cardname);
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

function assignEvents() {
  $(document).on('input propertychange', _userInputElem, function() {
    buildList();
  });  
}

$(function() {
  document.getElementById("defaultOpen").click();
  _userInputElem.val("MKUltra\nParagon\nHayley Kaplan: Universal Scholar");
  assignEvents();
  loadCards();
});