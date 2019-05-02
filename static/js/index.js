var _cardDB           = {};
var _cardDB_keyID     = {}; //same as _cardDB, but keyed by card code instead of name
var _cardListTextArea;
var _deckURLText;
var _setSelection;
var _cardPreview;
var _playsetSelection = "Single Set";
var _cardListHtml     = '';
var _cardList;
var _altArtCodes = {};
var _altArtSelector;
var _altArtSelectorHTML = '';
var _artSelectors = {};
var _backCodes;
var _imgCount;
var _selectedTab = "Card List";
var _socket;
var _sessID;

const IMAGE_BASE_DIR = "https://proxynexus.blob.core.windows.net/";
const NRDB_API_DIR = "https://netrunnerdb.com/api/2.0/public/";
const IMAGE_CONTAINER = "low-images/";

class AltSelector {
    constructor(imgID, selectID, selectedCode, altCodes) {
        this.imgID = imgID;
        this.selectID = selectID;
        this.selectedCode = selectedCode;
        this.altCodes = altCodes; 
    }

    cycleRight() {
        const index = this.altCodes.indexOf(this.selectedCode);
        const newIndex = (index+1) % this.altCodes.length;
        const newCode = this.altCodes[newIndex];
        this.switchArt(newCode);
        $("#"+this.selectID).val(newCode);
    }

    cycleLeft() {
        const index = this.altCodes.indexOf(this.selectedCode);
        const newIndex = index-1;
        if (newIndex < 0) {
            var newCode = this.altCodes[this.altCodes.length-1]
        } else {
            var newCode = this.altCodes[newIndex]
        }
        this.switchArt(newCode);
        $("#"+this.selectID).val(newCode);
    }

    switchArt(code) {
        const replaceIndex = _cardList.indexOf(this.selectedCode);
        _cardList[replaceIndex] = code;
        $("#"+this.imgID).attr("src", IMAGE_BASE_DIR + IMAGE_CONTAINER + code + ".jpg");
        this.selectedCode = code;

        const backImgID = "#" + this.imgID + "backImg";
        const backLink = "#" + this.imgID + "backLink";
        if (code in _backCodes) {
            $(backImgID).attr("src", IMAGE_BASE_DIR + IMAGE_CONTAINER + _backCodes[code] + ".jpg");
            $(backLink).show();
        } else {
            $(backLink).hide();
        }
    }
}

function selectTab(tabLabel) {
    _selectedTab = tabLabel;
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
    } else if (!('title' in _cardDB) || !('side' in _cardDB)) {
        fetchAllCards();
    } else {
        buildFromCardList();
    }
}

function saveCards() {
    localStorage.setItem('cardsDB', JSON.stringify(_cardDB));
    localStorage.setItem('cardDB_keyID', JSON.stringify(_cardDB_keyID));
}

function fetchAllCards() {
    localStorage.removeItem('cardsDB');
    localStorage.removeItem('cardDB_keyID');
    _cardPreview.html('<span class="text-muted" data-loading>loading cards ...</span>');

    $.getJSON(NRDB_API_DIR + "cards", function(response) {
        _cardDB = {};
        _cardDB_keyID = {};

        $.each(response.data, function(key, item) {
            const image = IMAGE_BASE_DIR + IMAGE_CONTAINER + item.code + '.jpg';

            _cardDB[item.title.toLowerCase().replace(/:/g, '').replace(/\s/g, '__')] = {
            code: item.code,
            title: item.title,
            image: image
            }

            _cardDB_keyID[item.code] = {
            code: item.code,
            side: item.side_code,
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

function fetchAltArts() {
    $.getJSON( "json/altart.json", function(response) {
        $.each(response.data, function(key, item) {
            _altArtCodes[item.code] = item.alts;
        });
        _backCodes = response.backCodes;
    });
}

function buildFromCardList() {
    const input = _cardListTextArea.val().toLowerCase().split(/\n/);
    var html = '';
    var unfound = 0;
    _altArtSelectorHTML = '';
    _cardList = [];
    
    if (!_cardDB) {
        return false;
    }
  
    for (var i=0; i<input.length; i++) {
        const cardInputRegex = /([0-9] |[0-9]x )?(.*)/;
        const match = cardInputRegex.exec(input[i]);

        var count = $.trim(match[1]).replace(/x/g, '');
        const cardname = $.trim(match[2]).replace(/:/g, '').replace(new RegExp(' ', 'g'), '__');	

        if (cardname == '') {		       
            continue;		
        }

        if (cardname in _cardDB) {
            const card = _cardDB[cardname];
            if (count > 6) {
                count = 6;
            } else if (count < 1) {
                count = 1;
            }
            for (var j=0; j<count; j++) {
                html += buildCardHTML(card.code, card.image, card.title);
                _cardList.push(card.code);
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
        _cardPreview.html(_cardListHtml);
        _altArtSelector.html(_altArtSelectorHTML);
    }
}

function buildFromDeckID() {
    _altArtSelectorHTML = '';

    if (!_cardDB_keyID) {
        return false;
    }

    const deckInput = _deckURLText.val().toLowerCase();
    const publishedDeckIDRegex = /(\/en\/decklist\/)(\d+)/;
    const unpublishedDeckIDRegex = /(\/deck\/view\/)(\d+)/;

    const match = publishedDeckIDRegex.exec(deckInput);
    var published = true;
    if (match == null) {
        match = unpublishedDeckIDRegex.exec(deckInput);
        published = false;
        if (match == null) return;
    }

    const deckid = match[2];
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

function makeCardHTML(response) {
    const input = response.data[0].cards;
    const keys = Object.keys(input);
    var html = '';
    _cardList = [];
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] in _cardDB_keyID) {
            var card = _cardDB_keyID[keys[i]];
            for (var j = 0; j < input[keys[i]]; j++) {
                html += buildCardHTML(card.code, card.image, card.title);
                _cardList.push(card.code);
            }
        }
    }

    if (_cardListHtml != html) {
        _cardListHtml = html;
        _cardPreview.html(_cardListHtml);
        _altArtSelector.html(_altArtSelectorHTML);
    }
}

function buildFromSet() {
    const selectedSet = _setSelection.val();
    const coreSets = ["core", "core2", "sc19"];
    var html = '';
    _altArtSelectorHTML = '';
    _cardList = [];

    if (!_cardDB_keyID || !selectedSet) {
        return false;
    }

    const playsetDisplay = document.getElementById("playsetDisplay");
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
                _cardList.push(card.code);
            }
        });

        if (_cardListHtml != html) {
            _cardListHtml = html;
            _cardPreview.html(_cardListHtml);
            _altArtSelector.html(_altArtSelectorHTML);
        }
    });
}

function buildCardHTML(code, image, title) {
    var imgID = "cardPrev" + _imgCount++;
    var newCard = '';

    newCard += '<a href="https://netrunnerdb.com/en/card/' + code + '" title="" target="NetrunnerCard">';
    newCard += '<img class="card" id="' + imgID + '" src="' + image + '" alt="' + code + '" />';
    newCard += '<span class="label">' + code + ' ' + title + '</span>'; 
    newCard += '</a>';

    if (code in _altArtCodes) {
        const backImgID = imgID + "backImg";
        const backLink = imgID + "backLink";
        addAltArtSelector(code, imgID);
        newCard += '<a id="' + backLink + '" style="display: none;" href="https://netrunnerdb.com/en/card/' + code + '" title="" target="NetrunnerCard">';
        newCard += '<img class="card" id="' + backImgID + '"/>';
        newCard += '<span class="label">' + code + ' ' + title + '</span>'; 
        newCard += '</a>';
    } else {
        if (code == "08012") {
            const extras = ["08012a", "08012", "08012b", "08012", "08012c"];
            extras.forEach(function(extra) {
            const img = IMAGE_BASE_DIR + IMAGE_CONTAINER + extra + '.jpg';
            newCard += '<a href="https://netrunnerdb.com/en/card/' + code + '" title="" target="NetrunnerCard">';
            newCard += '<img class="card" src="' + img + '" alt="' + code + '" />';
            newCard += '<span class="label">' + code + ' ' + title + '</span>'; 
            newCard += '</a>';
            });
        } else if (code == "09001") {
            const syncBack = IMAGE_BASE_DIR + IMAGE_CONTAINER + '09001a.jpg';
            newCard += '<a href="https://netrunnerdb.com/en/card/' + code + '" title="" target="NetrunnerCard">';
            newCard += '<img class="card" src="' + syncBack + '" alt="' + code + '" />';
            newCard += '<span class="label">' + code + ' ' + title + '</span>'; 
            newCard += '</a>';
        }
    }
    return newCard;
}

function addAltArtSelector(code, imgID) {
    const alts = _altArtCodes[code];
    const altCodes = alts.map( alt => {
        return alt.code;
    })
    const selectID = "selector" + _imgCount;

    _artSelectors[imgID] = new AltSelector(imgID, selectID, code, altCodes);
    const switchArtCall = '_artSelectors[\''+ imgID +'\'].switchArt(this.value)';
    const cycleLeftCall = '_artSelectors[\''+ imgID +'\'].cycleLeft()';
    const cycleRightCall = '_artSelectors[\''+ imgID +'\'].cycleRight()';

    var selectorEntry = '<li class="list-group-item">';
    selectorEntry += '<div class="row">';
    selectorEntry += '<button type="button" class="btn btn-default btn-sm" onclick="' + cycleLeftCall + '">';
    selectorEntry += '<span class="fas fa-chevron-left"></span>';
    selectorEntry += '</button>';
    selectorEntry += '<select id="'+selectID+'" class="form-control form-control-sm" onchange="' + switchArtCall + '" style="width:auto;">';

    for (var i=0; i<alts.length; i++) {
        selectorEntry += '<option value="' + alts[i].code + '">' + alts[i].title + '</option>';
    }

    selectorEntry += '</select>';
    selectorEntry += '<button type="button" class="btn btn-default btn-sm" onclick="' + cycleRightCall + '">';
    selectorEntry += '<span class="fas fa-chevron-right"></span>';
    selectorEntry += '</button>';
    selectorEntry += '</div></li>';

    if (_altArtSelectorHTML === '') {
        _altArtSelectorHTML += '<h6>Alt Arts</h6>';
    }

    _altArtSelectorHTML += selectorEntry;
}

function getExtraInfo() {
    var extraInfo;
    switch(_selectedTab) {
        case "Card List":
        extraInfo = "Cards: " + _cardListTextArea.val().replace(/\n/g, ",");;
        break;
        case "Set":
        extraInfo = "Set: " + _setSelection.val() + ", playset: " + _playsetSelection;
        break;
        case "NetrunnerDB":
        extraInfo = "URL: " + _deckURLText.val();
        break;
    }
    return extraInfo;
}

function makePDF() {
    const paperSize = $("input[type='radio'][name='paperSizeSelection']:checked").val();
    const imageQuality = $("input[type='radio'][name='imageQualitySelection']:checked").val();

    const downloadOptions = {
        "sessID": _sessID,
        "paperSize": paperSize,
        "quality": imageQuality,
        "requestedImages": _cardList,
        "logInfo": "Selected Tab: " + _selectedTab + ", " + getExtraInfo()
    };

    $('#PDFGenerateBtn').hide();
    $('#PDFDownloadSpinner').show();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/makePDF", true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.responseType = 'json';
    const data = JSON.stringify(downloadOptions);
    xhr.send(data);
}

function displayPDFDownloadError(msg) {
    $("#PDFStatus").html("");
    $('#PDFDownloadSpinner').hide();
    $('#PDFResetBtn').show();
    $("#PDFDownloadErrorMsg").html(msg);
}

function displayPDFDownload(pdfPath) {
    $("#PDFStatus").html("");
    $('#PDFDownloadBtn').attr('href', pdfPath); 
    $('#PDFDownloadBtn').show();
    $('#PDFDownloadSpinner').hide();
    $('#PDFResetBtn').show();
}

function resetPDFDownload() {
    $('#PDFResetBtn').hide();
    $('#PDFDownloadBtn').hide();
    $('#PDFGenerateBtn').show();
    $("#PDFDownloadErrorMsg").html("");
}

function getZip() {

    // split cards in _cardList
    var corpCodes = [];
    var runnerCodes = [];

    _cardList.forEach( code => {
        if (_cardDB_keyID[code].side === 'corp') {
            corpCodes.push(code);
        }
        if (_cardDB_keyID[code].side === 'runner') {
            runnerCodes.push(code);
        }
    });

    const imgPlacement = $("input[type='radio'][name='imgPlacement']:checked").val();
    const downloadOptions = {
        "sessID": _sessID,
        "imagePlacement": imgPlacement,
        "corpCodes": corpCodes,
        "runnerCodes": runnerCodes,
        "logInfo": "Selected Tab: " + _selectedTab + ", " + getExtraInfo()
    };
    const data = JSON.stringify(downloadOptions);

    $('#ZipGenerateBtn').hide();
    $('#ZipDownloadSpinner').show();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/makeMpcZip", true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.responseType = 'json';
    xhr.send(data);
}

function displayZipDownloadError(msg) {
    $("#ZipStatus").html("");
    $('#ZipDownloadSpinner').hide();
    $('#ZipResetBtn').show();
    $("#ZipDownloadErrorMsg").html(msg);
}

function displayZipDownload(ZipPath) {
    $("#ZipStatus").html("");
    $('#ZipDownloadBtn').attr('href', ZipPath); 
    $('#ZipDownloadBtn').show();
    $('#ZipDownloadSpinner').hide();
    $('#ZipResetBtn').show();
}

function resetZipDownload() {
    $('#ZipResetBtn').hide();
    $('#ZipDownloadBtn').hide();
    $('#ZipGenerateBtn').show();
    $("#ZipDownloadErrorMsg").html("");
}

function assignEvents() {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
        const currentTab = $(e.target).text();
        selectTab(currentTab);
    });

    $(".playset-btn").click(function(e) {
        selectPlayset(e.target.value);
    })

    $("#PDFGenerateBtn").click(function(e) {
        makePDF();
    })

    $("#PDFResetBtn").click(function(e) {
        resetPDFDownload();
    })

    $("#ZipGenerateBtn").click(function(e) {
        getZip();
    })

    $("#ZipResetBtn").click(function(e) {
        resetZipDownload();
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

function setupWS() {
    var HOST = location.origin.replace(/^http/, 'ws');
    _socket = new WebSocket(HOST);

    _socket.onopen = function (e) {
        console.log("connected");
    };

    _socket.onmessage = (e) => {
        const msg=JSON.parse(e.data);
        if ("sessID" in msg) {
            _sessID = msg.sessID;
        }
        if (msg.reqType === "pdf") {
            if ("success" in msg) {
                if (msg.success) {
                    displayPDFDownload(msg.downloadLink);
                } else {
                    displayPDFDownloadError(msg.errorMsg);
                }
            }
            if ("status" in msg) {
                $("#PDFStatus").html(msg.status);
            }
        }
        if (msg.reqType === "zip") {
            if ("success" in msg) {
                if (msg.success) {
                    displayZipDownload(msg.downloadLink);
                } else {
                    displayZipDownloadError(msg.errorMsg);
                }
            }
            if ("status" in msg) {
                $("#ZipStatus").html(msg.status);
            }
        }
    }
}

$(function() {
    _cardListTextArea = $('#cardListTextArea');
    _deckURLText = $('#deckURLText');
    _setSelection = $('#setSelection');
    _cardPreview = $('#cardPreview');
    _altArtSelector = $('#alt-art-selector');
    _imgCount = 0;

    assignEvents();
    loadCards();
    fetchSetList();
    fetchAltArts();
    setupWS();

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
        _cardListTextArea.val(chosenCards[0]+ "\n" + chosenCards[1]+ "\n" + chosenCards[2]+ "\n");
    }
});