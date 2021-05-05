// eslint-disable-next-line max-classes-per-file,import/extensions
import { loadSettings } from './helpers.js';

let cardTitleDB;
let cardCodeDB;
let packList;
let cardListTextArea;
let setSelection;
let deckURLText;
let cardManager;
let settings;
let sessionID = 0;
let playsetSelection = 'Single Set';
let selectedTab = 'Card List';
let downloadState = false;

const IMAGE_BASE_DIR = 'https://proxynexus.blob.core.windows.net/version2/';
const NRDB_API_DIR = 'https://netrunnerdb.com/api/2.0/public/';
const NRDB_CARD_DIR = 'https://netrunnerdb.com/en/card/';

function t2key(t) {
  return t.trim().toLowerCase().replace(/:/g, '').replace(new RegExp(' ', 'g'), '__');
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occurred fetching from ${url}: ${response.status}`;
    throw new Error(message);
  }
  return response.json();
}

async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const message = `An error has occurred fetching from ${url}: ${response.status}`;
    throw new Error(message);
  }
  return response.json();
}

function downloadFile(data) {
  const a = document.createElement('a');
  a.setAttribute('href', data);
  a.setAttribute('target', '_blank');
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

class Card {
  constructor(code) {
    const card = cardCodeDB[code];
    this.code = code;
    this.title = card.title;
    this.allCodes = cardTitleDB[t2key(this.title)].codes;
    const scanSourcePrioritiesLists = {
      pt: ['pt', 'lm', 'de'],
      lm: ['lm', 'pt', 'de'],
      de: ['de', 'pt', 'lm'],
    };
    const sourcePriorities = scanSourcePrioritiesLists[settings.scanSourcePriority];
    let prevSourceKey;
    for (let i = 0; i < sourcePriorities.length; i += 1) {
      const s = sourcePriorities[i];
      if (card.availableSources.includes(s)) {
        this.scanSource = s;
        prevSourceKey = `${s}Preview`;
        break;
      }
    }
    this.frontPrev = card[prevSourceKey].front;
    this.backPrev = card[prevSourceKey].back;
    // get pack codes for each code in allCodes
    // TODO if current code isn't available, try another code of the same image, if available...
  }

  getPreviewHTML() {
    let newHtml = '';
    const frontImgURL = `${IMAGE_BASE_DIR}${this.frontPrev}`;
    newHtml += `<a href="${NRDB_CARD_DIR}${this.code}" title="" target="NetrunnerCard">`;
    newHtml += `<img class="card" id="prev${this.code}" src="${frontImgURL}" alt="${this.code}" />`;
    newHtml += `<span class="label">${this.code} ${this.title}</span>`;
    newHtml += '</a>';
    if (this.backPrev !== '') {
      const backImgURL = `${IMAGE_BASE_DIR}${this.backPrev}`;
      newHtml += `<a class="backImgPreview" id="prev${this.code}backLink" style="display: none;" href="${NRDB_CARD_DIR}${this.code}" title="" target="NetrunnerCard">`;
      newHtml += `<img class="card" id="prev${this.code}backImg" src=${backImgURL} alt=${this.code}back"/>`;
      newHtml += `<span class="label">${this.code} ${this.title}</span>`;
      newHtml += '</a>';
    }
    return newHtml;
  }
  // make alt art selector html
  // alt art change methods
}

class CardManager {
  constructor() {
    this.cardPreview = document.querySelector('#cardPreview');
    this.cardList = [];
    // all art component
  }

  resetScroll() {
    this.cardPreview.scroll({
      top: 0,
      behavior: 'auto',
    });
    // scroll alt art selector
  }

  setCardPreviewHTML(html) {
    this.cardPreview.innerHTML = html;
  }

  buildCardPreviewHTML() {
    let newHtml = '';
    this.cardList.forEach((card) => {
      newHtml += card.getPreviewHTML();
    });
    this.setCardPreviewHTML(newHtml);
  }

  updateCardListFromTextArea(cardListText) {
    const input = cardListText.split(/\n/);
    const cardInputRegex = /([0-9] |[0-9]x )?(.*)/;
    const cardTitles = this.cardList.map((c) => c.title);
    const newCardTitles = [];

    input.forEach((entry) => {
      const match = cardInputRegex.exec(entry);
      const count = (match[1] === undefined) ? 1 : parseInt(match[1], 10);
      const cardKey = t2key(match[2]);

      if (cardKey !== '' && cardKey in cardTitleDB) {
        for (let i = 0; i < count; i += 1) {
          const cardTitle = cardTitleDB[cardKey].title;
          newCardTitles.push(cardTitle);
        }
      }
    });

    const indicesOfCardsToRemove = [];
    const temp = [...newCardTitles];
    cardTitles.forEach((title, i) => {
      if (temp.includes(title)) {
        temp.splice(temp.indexOf(title), 1);
      } else {
        indicesOfCardsToRemove.push(i);
      }
    });

    for (let i = indicesOfCardsToRemove.length - 1; i >= 0; i -= 1) {
      this.cardList.splice(indicesOfCardsToRemove[i], 1);
    }

    const cardsToCreate = [];
    const temp2 = [...cardTitles];
    newCardTitles.forEach((title, i) => {
      if (temp2.includes(title)) {
        temp2.splice(temp2.indexOf(title), 1);
      } else {
        cardsToCreate.push({ title, i });
      }
    });

    cardsToCreate.forEach(({ title, i }) => {
      const [code] = cardTitleDB[t2key(title)].codes;
      this.cardList.splice(i, 0, new Card(code));
    });

    this.buildCardPreviewHTML();
  }

  // method to make entire alt art selector html

  setCardList(newCards) {
    this.cardList = [];
    newCards.forEach((card) => {
      for (let i = 0; i < card.quantity; i += 1) {
        this.cardList.push(new Card(card.code));
      }
    });
    this.buildCardPreviewHTML();
  }

  getCardList() {
    return this.cardList.map((card) => ({ code: card.code, source: card.scanSource }));
  }

  updateCardListFromSetSelection(packCode) {
    let isCoreSet = false;
    packList.forEach((pack) => {
      if (pack.pack_code === packCode && pack.is_core) {
        isCoreSet = true;
      }
    });

    const playsetDisplay = document.getElementById('playsetDisplay');
    if (isCoreSet) {
      playsetDisplay.style.display = 'block';
    } else {
      playsetDisplay.style.display = 'none';
    }

    fetchJson(`/api/getPack/${packCode}`)
      .then((res) => {
        // eslint-disable-next-line default-case
        switch (playsetSelection) {
          case 'Single Set': {
            this.setCardList(res.data);
            break;
          }
          case 'Playset': {
            const cardList = res.data.map((card) => ({ code: card.code, quantity: 3 }));
            this.setCardList(cardList);
            break;
          }
          case 'Playset Limit IDs': {
            const cardList = res.data.map((card) => {
              if (card.card.type === 'identity') {
                return { code: card.code, quantity: 1 };
              }
              return { code: card.code, quantity: 3 };
            });
            this.setCardList(cardList);
            break;
          }
        }
      });
  }

  updateCardListFromDecklistURL(url) {
    const publishedDeckIDRegex = /(\/en\/decklist\/)(\d+)/;
    const unpublishedDeckIDRegex = /(\/deck\/view\/)(\d+)/;
    const publishedMatch = publishedDeckIDRegex.exec(url);
    const unpublishedMatch = unpublishedDeckIDRegex.exec(url);
    let deckId;
    let apiOption;

    if (publishedMatch) {
      [, , deckId] = publishedMatch;
      apiOption = 'decklist/';
    } else if (unpublishedMatch) {
      [, , deckId] = unpublishedMatch;
      apiOption = 'deck/';
    }

    if (deckId) {
      fetchJson(`${NRDB_API_DIR}${apiOption}${deckId}`)
        .then((res) => {
          const newCards = Object.entries(res.data[0].cards)
            .map(([code, quantity]) => ({ code, quantity }));
          this.setCardList(newCards);
        });
    }
  }
}

function loadStoredSelections() {
  const storedCardList = localStorage.getItem('cardList');
  if (storedCardList) {
    cardListTextArea.value = storedCardList;
  } else {
    const chosenCards = [];
    for (let i = 0; i < 3; i += 1) {
      const randIndex = Math.floor(Math.random() * Object.keys(cardTitleDB).length);
      const cardTitleList = Object.keys(cardTitleDB);
      const cardTitle = cardTitleList[randIndex];
      const cardCode = cardTitleDB[cardTitle].codes[0];
      chosenCards.push(cardCodeDB[cardCode].title);
    }
    cardListTextArea.value = `${chosenCards[0]}\n${chosenCards[1]}\n${chosenCards[2]}\n`;
    localStorage.setItem('cardList', cardListTextArea.value);
  }
  cardManager.updateCardListFromTextArea(cardListTextArea.value);

  const storedDeckURLText = localStorage.getItem('deckURLText');
  if (storedDeckURLText) {
    deckURLText.value = storedDeckURLText;
  }
}

function populateSetSelection() {
  packList.forEach((pack) => {
    const option = document.createElement('option');
    option.setAttribute('value', pack.pack_code);
    option.innerHTML = pack.name;
    setSelection.appendChild(option);
  });

  const storedSetSelection = localStorage.getItem('setSelection');
  if (storedSetSelection) {
    setSelection.value = storedSetSelection;
  } else {
    setSelection.value = packList[0].pack_code;
  }
}

function loadOptions() {
  cardTitleDB = JSON.parse(localStorage.getItem('cardTitleDB'));
  cardCodeDB = JSON.parse(localStorage.getItem('cardCodeDB'));
  packList = JSON.parse(localStorage.getItem('packList'));

  if (cardTitleDB) {
    loadStoredSelections();
    populateSetSelection();
  } else {
    localStorage.removeItem('cardTitleDB');
    localStorage.removeItem('cardCodeDB');
    localStorage.removeItem('packList');
    cardManager.setCardPreviewHTML('<span class="text-muted" data-loading>LOADING CARDS...</span>');
    fetchJson('/api/getOptions')
      .then((resJson) => {
        cardTitleDB = resJson.data.cardTitleDB;
        cardCodeDB = resJson.data.cardCodeDB;
        packList = resJson.data.packList;
        localStorage.setItem('cardTitleDB', JSON.stringify(cardTitleDB));
        localStorage.setItem('cardCodeDB', JSON.stringify(cardCodeDB));
        localStorage.setItem('packList', JSON.stringify(packList));
        loadStoredSelections();
        populateSetSelection();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}

function selectTab(tabLabel) {
  selectedTab = tabLabel;
  switch (tabLabel) {
    case 'Card List':
      cardManager.updateCardListFromTextArea(cardListTextArea.value);
      break;
    case 'Set':
      cardManager.updateCardListFromSetSelection(setSelection.value);
      break;
    case 'Decklist':
      cardManager.updateCardListFromDecklistURL(deckURLText.value);
      break;
    default:
      break;
  }
}

function assignEvents() {
  cardListTextArea.addEventListener('input', (e) => {
    cardManager.updateCardListFromTextArea(e.target.value);
    localStorage.setItem('cardList', e.target.value);
  });

  setSelection.addEventListener('input', (e) => {
    cardManager.resetScroll();
    cardManager.updateCardListFromSetSelection(e.target.value);
    localStorage.setItem('setSelection', e.target.value);
  });

  deckURLText.addEventListener('input', (e) => {
    cardManager.resetScroll();
    cardManager.updateCardListFromDecklistURL(e.target.value);
    localStorage.setItem('deckURLText', e.target.value);
  });

  const navSelectors = document.querySelectorAll('button[data-bs-toggle="tab"]');
  navSelectors.forEach((selector) => {
    selector.addEventListener('shown.bs.tab', (e) => {
      cardManager.resetScroll();
      selectTab(e.target.innerText);
      selectedTab = e.target.innerText;
    });
  });

  const playsetButtons = document.getElementsByClassName('playset-btn');
  Array.from(playsetButtons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      playsetSelection = e.target.value;
      cardManager.updateCardListFromSetSelection(setSelection.value);
    });
  });

  document.getElementById('generateBtn')
    .addEventListener('click', () => {
      const generateSettings = {
        sessionID,
        selectedTab,
        cardListTextArea: cardListTextArea.value,
        selectedSet: setSelection.value,
        playsetSelection,
        deckURLText: deckURLText.value,
        generateType: document.querySelector('input[name="generationType"]:checked').value,
        cardList: cardManager.getCardList(),
        PdfPageSize: settings.PdfPageSize,
        LmMpcPlacement: settings.LmMpcPlacement,
        fullCutLines: (settings.fullCutLines === 'true'),
        includeCardBacks: (settings.includeCardBacks === 'true'),
      };
      postData('/api/generate', generateSettings)
        .then(() => {
          downloadState = true;
          document.getElementById('progressBarDiv').style.opacity = '1';
          document.getElementById('generateBtn').disabled = true;
          document.getElementById('progressBar').display = 'block';
        })
        .catch((err) => {
          console.log(err.message);
        });
    });

  const eventSource = new EventSource('/api/getGenStatus');
  eventSource.addEventListener('message', (e) => {
    const data = JSON.parse(e.data);
    switch (data.status) {
      case 'init connection': {
        if (sessionID === 0) {
          sessionID = data.msg;
        }
        break;
      }
      case 'waiting':
      case 'in progress': {
        if (downloadState) {
          document.getElementById('progressBar').style.width = `${data.progress}%`;
          document.getElementById('progressBar').innerHTML = `${Math.round(data.progress)}%`;
          document.getElementById('progressStatus').innerHTML = data.msg;
        }
        break;
      }
      case 'completed': {
        downloadState = false;
        document.getElementById('progressBarDiv').style.opacity = '0';
        document.getElementById('progressBar').style.width = '0%';
        document.getElementById('progressBar').innerHTML = '';
        document.getElementById('generateBtn').disabled = false;
        document.getElementById('progressStatus').innerHTML = '';
        downloadFile(data.msg); // TODO replace this with request ID, and use it to download
        break;
      }
      default:
        break;
    }
  }, false);

  eventSource.addEventListener('open', () => {
    console.log('Connected');
    document.getElementById('HeadMsg').innerHTML = '';
    document.getElementById('generateBtn').disabled = false;
  }, false);

  eventSource.addEventListener('error', (e) => {
    sessionID = 0;
    document.getElementById('HeadMsg').innerHTML = 'Lost connection to server, try freshing your browser';
    document.getElementById('generateBtn').disabled = true;
    console.log(e);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  cardManager = new CardManager();
  cardListTextArea = document.querySelector('#cardListTextArea');
  setSelection = document.querySelector('#setSelection');
  deckURLText = document.querySelector('#deckURLText');

  settings = loadSettings(() => {
    // eslint-disable-next-line no-undef
    const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'), {});
    welcomeModal.show();
  });
  assignEvents();
  loadOptions();
});
