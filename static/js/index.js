var _cardDB           = {};
var _cardDB_keyID     = {}; //same as _cardDB, but keyed by card code instead of name
var _cardListTextArea;
var _deckURLText;
var _setSelection;
var _cardPreview;
var _playsetSelection = "Single Set";
var _cardList;
var _altArtSelector;
var _artSelectors = {};
var _imgCount;
var _selectedTab = "Card List";
var _socket;
var _sessID;

const IMAGE_BASE_DIR = "https://proxynexus.blob.core.windows.net/";
const NRDB_API_DIR = "https://netrunnerdb.com/api/2.0/public/";
const NRDB_CARD_DIR = "https://netrunnerdb.com/en/card/";
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
        $("#"+this.imgID).attr("src", _cardDB_keyID[code].image);
        this.selectedCode = code;
 
        const backImgID = "#" + this.imgID + "backImg";
        const backLink = "#" + this.imgID + "backLink";
        if (_cardDB_keyID[code].back_code) {
            $(backImgID).attr("src", _cardDB_keyID[code].back_img);
            if ($('#includeAltArtBacks').prop('checked')) {
                $(backLink).show();
            }
        } else {
            $(backImgID).attr("src", "");
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
            const cardDBKey = item.title.toLowerCase().replace(/:/g, '').replace(/\s/g, '__');

            _cardDB[cardDBKey] = {
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

        $.getJSON( "json/altart.json", function(response) {

            // add alt art codes
            $.each(response.altArtRelations, function(key, item) {
                _cardDB_keyID[item.code].alts = item.alts;

                const cardDBKey = _cardDB_keyID[item.code].title.toLowerCase().replace(/:/g, '').replace(/\s/g, '__');
                _cardDB[cardDBKey].alts = item.alts;
            });

            // add entries for alt art codes, to store their side_code, title, and back code if it exists
            $.each(response.altArtCards, function(key, item) {
                const image = IMAGE_BASE_DIR + IMAGE_CONTAINER + item.code + '.jpg';
                if (item.back_code) {
                    var back_img = IMAGE_BASE_DIR + IMAGE_CONTAINER + item.back_code + ".jpg"
                } else {
                    var back_img = null;
                }

                _cardDB_keyID[item.code] = {
                    code: item.code,
                    back_code: item.back_code,
                    back_img: back_img,
                    side: item.side_code,
                    title: item.title,
                    image: image
                }
            });
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
    const input = _cardListTextArea.val().toLowerCase().split(/\n/);
    var html = '';
    var unfound = 0;
    var artSelectorHTML = '';
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
                const imgID = "cardPrev" + _imgCount++;

                _cardList.push(card.code);
                html += buildCardHTML(card.code, card.image, card.title, imgID);

                if ("alts" in card) {
                    if (artSelectorHTML === '') {
                        $("#alt-art-selector-hide-btn").show();
                        $("#includeAltArtBacksCheckbox").show();
                        artSelectorHTML += '<h6>Alt Arts</h6>';
                    }
                    artSelectorHTML += addAltArtSelector(card.code, card.alts, imgID);
                }
            }
        } else {
            unfound++;
        }
    }
  
    if (unfound > 0) {
        html += '<p class="no-print text-muted">' + unfound + ' not found</p>';
    }
    _cardPreview.html(html);
    _altArtSelector.html(artSelectorHTML);
    if (artSelectorHTML === '') {
        $("#alt-art-selector-hide-btn").hide();
        $("#includeAltArtBacksCheckbox").hide();
    }
}

function buildFromDeckID() {
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
    var artSelectorHTML = '';
    _cardList = [];
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] in _cardDB_keyID) {
            var card = _cardDB_keyID[keys[i]];
            for (var j = 0; j < input[keys[i]]; j++) {
                const imgID = "cardPrev" + _imgCount++;

                _cardList.push(card.code);
                html += buildCardHTML(card.code, card.image, card.title, imgID);

                if ("alts" in card) {
                    if (artSelectorHTML === '') {
                        $("#alt-art-selector-hide-btn").show();
                        $("#includeAltArtBacksCheckbox").show();
                        artSelectorHTML += '<h6>Alt Arts</h6>';
                    }
                    artSelectorHTML += addAltArtSelector(card.code, card.alts, imgID);
                }
            }
        }
    }
    _cardPreview.html(html);
    _altArtSelector.html(artSelectorHTML);
    if (artSelectorHTML === '') {
        $("#alt-art-selector-hide-btn").hide();
        $("#includeAltArtBacksCheckbox").hide();
    }
}

function buildFromSet() {
    const selectedSet = _setSelection.val();
    const coreSets = ["core", "core2", "sc19"];
    var html = '';
    var artSelectorHTML = '';
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
                const image = IMAGE_BASE_DIR + IMAGE_CONTAINER + card.code + '.jpg';
                const imgID = "cardPrev" + _imgCount++;
                const localCard = _cardDB_keyID[card.code];

                _cardList.push(card.code);
                html += buildCardHTML(card.code, image, card.title, imgID);

                if ("alts" in localCard) {
                    if (artSelectorHTML === '') {
                        $("#alt-art-selector-hide-btn").show();
                        $("#includeAltArtBacksCheckbox").show();
                        artSelectorHTML += '<h6>Alt Arts</h6>';
                    }
                    artSelectorHTML += addAltArtSelector(card.code, localCard.alts, imgID);
                }
            }
        });
        _cardPreview.html(html);
        _altArtSelector.html(artSelectorHTML);
        if (artSelectorHTML === '') {
            $("#alt-art-selector-hide-btn").hide();
            $("#includeAltArtBacksCheckbox").hide();
        }
    }).fail(function() {
        $("#HeadMsg").html("<h3>Error fetching set list, try refreshing the page...</h3>");
    });
}

function buildCardHTML(code, image, title, imgID) {
    var newCard = '';
    newCard += '<a href="' + NRDB_CARD_DIR + code + '" title="" target="NetrunnerCard">';
    newCard += '<img class="card" id="' + imgID + '" src="' + image + '" alt="' + code + '" />';
    newCard += '<span class="label">' + code + ' ' + title + '</span>'; 
    newCard += '</a>';

    if ("alts" in _cardDB_keyID[code]) {   
        const backImgID = imgID + "backImg";
        const backLink = imgID + "backLink";
        newCard += '<a class="backImgPreview" id="' + backLink + '" style="display: none;" href="' + NRDB_CARD_DIR + code + '" title="" target="NetrunnerCard">';
        newCard += '<img class="card" id="' + backImgID + '"/>';
        newCard += '<span class="label">' + code + ' ' + title + '</span>'; 
        newCard += '</a>';
    } else {
        if (code == "08012") {
            const extras = ["08012a", "08012", "08012b", "08012", "08012c"];
            extras.forEach(function(extra) {
            const img = IMAGE_BASE_DIR + IMAGE_CONTAINER + extra + '.jpg';
            newCard += '<a href="' + NRDB_CARD_DIR + code + '" title="" target="NetrunnerCard">';
            newCard += '<img class="card" src="' + img + '" alt="' + code + '" />';
            newCard += '<span class="label">' + code + ' ' + title + '</span>'; 
            newCard += '</a>';
            });
        } else if (code == "09001") {
            const syncBack = IMAGE_BASE_DIR + IMAGE_CONTAINER + '09001a.jpg';
            newCard += '<a href="' + NRDB_CARD_DIR + code + '" title="" target="NetrunnerCard">';
            newCard += '<img class="card" src="' + syncBack + '" alt="' + code + '" />';
            newCard += '<span class="label">' + code + ' ' + title + '</span>'; 
            newCard += '</a>';
        }
    }
    return newCard;
}

function addAltArtSelector(code, alts, imgID) {
    const selectID = "selector" + _imgCount;
    _artSelectors[imgID] = new AltSelector(imgID, selectID, code, alts);

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
        const altCode = alts[i];
        const title = _cardDB_keyID[altCode].title;
        selectorEntry += '<option value="' + altCode + '">' + title + '</option>';
    }
    selectorEntry += '</select>';
    selectorEntry += '<button type="button" class="btn btn-default btn-sm" onclick="' + cycleRightCall + '">';
    selectorEntry += '<span class="fas fa-chevron-right"></span>';
    selectorEntry += '</button>';
    selectorEntry += '</div></li>';

    return selectorEntry;
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
    const includeBackArt = $('#includeAltArtBacks').prop('checked');

    const downloadOptions = {
        "sessID": _sessID,
        "paperSize": paperSize,
        "quality": imageQuality,
        "includeBackArt": includeBackArt,
        "requestedImages": _cardList,
        "logInfo": "Selected Tab: " + _selectedTab + ", " + getExtraInfo()
    };

    $("#PDFStatus").html("Connecting...");
    $('#PDFGenerateBtn').hide();
    $('#PDFDownloadSpinner').show();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/makePDF", true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.responseType = 'json';
    xhr.onerror = function () {
        $("#PDFStatus").html("Error, try refreshing the page");
    };
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
    const includeBackArt = $('#includeAltArtBacks').prop('checked');
    const downloadOptions = {
        "sessID": _sessID,
        "imagePlacement": imgPlacement,
        "includeBackArt": includeBackArt,
        "corpCodes": corpCodes,
        "runnerCodes": runnerCodes,
        "logInfo": "Selected Tab: " + _selectedTab + ", " + getExtraInfo()
    };

    $("#ZipStatus").html("Connecting...");
    $('#ZipGenerateBtn').hide();
    $('#ZipDownloadSpinner').show();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/makeMpcZip", true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.responseType = 'json';
    xhr.onerror = function () {
        $("#ZipStatus").html("Error, try refreshing the page");
    };
    const data = JSON.stringify(downloadOptions);
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

function resetScroll() {
    $('#cardPreview').animate({ scrollTop: 0 }, "fast");
    $('#alt-art-selector').animate({ scrollTop: 0 }, "fast");
}

function assignEvents() {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
        const currentTab = $(e.target).text();
        selectTab(currentTab);
        resetScroll();
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

    $("#alt-art-selector-hide-btn").click(function(e) {
        $(this).text(function(i, prev){
            return prev=='Show Alt-Art Selection' ?  'Hide Alt-Art Selection' : 'Show Alt-Art Selection';
        });
    });

    $("#setInfo-hide-btn").click(function(e) {
        $(this).text(function(i, prev){
            return prev=='Show Set Info' ?  'Hide Set Info' : 'Show Set Info';
        });
    });

    $('#includeAltArtBacks').change(function() {
        const backImgPreviews = $(".backImgPreview");
        if(this.checked) {
            backImgPreviews.each(function(i) {
                if ($(this).children('img').attr("src")) {
                    $(this).show();
                }
            })
        } else {
            backImgPreviews.hide();
        }
    });

    _cardListTextArea.on('input',function(e){
        buildFromCardList();
    });

    _deckURLText.on('input',function(e){
        buildFromDeckID(true);
        resetScroll();
    });

    _setSelection.on('input',function(e){
        buildFromSet();
        resetScroll();
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