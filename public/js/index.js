// eslint-disable-next-line max-classes-per-file
let cardTitleDB;
let cardCodeDB;
let packList;
let cardListTextArea;
let setSelection;
let deckURLText;
let cardManager;
// let selectedTab;

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

// TODO move this function to Card class, so it can be aware of it's current source
function getCardImgs(code) {
  const card = cardCodeDB[code];
  const sourcePriority = ['pt', 'lm', 'de']; // temporary, should be loaded from settings/cookie
  let source;
  for (let i = 0; i < sourcePriority.length; i += 1) {
    const s = sourcePriority[i];
    if (card.availableSources.includes(s)) {
      source = `${s}Preview`;
      break;
    }
  }
  // TODO if current code isn't available, try another code of the same image, if available...
  return [card[source].front, card[source].back];
}

class Card {
  constructor(code) {
    this.code = code;
    this.title = cardCodeDB[code].title;
    this.allCodes = cardTitleDB[t2key(this.title)].codes;
    // this.scanSource
    // get pack codes for each code in allCodes
  }

  getPreviewHTML() {
    let newHtml = '';
    const [frontImg, backImg] = getCardImgs(this.code);
    const frontImgURL = `${IMAGE_BASE_DIR}${frontImg}`;
    newHtml += `<a href="${NRDB_CARD_DIR}${this.code}" title="" target="NetrunnerCard">`;
    newHtml += `<img class="card" id="prev${this.code}" src="${frontImgURL}" alt="${this.code}" />`;
    newHtml += `<span class="label">${this.code} ${this.title}</span>`;
    newHtml += '</a>';
    if (backImg !== '') {
      const backImgURL = `${IMAGE_BASE_DIR}${backImg}`;
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

  updateCardListFromSetSelection(packCode) {
    fetchJson(`${window.location.origin}/api/getPack/${packCode}`)
      .then((res) => {
        // TODO use full set selection and card type to control quantity
        this.setCardList(res.data);
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

function loadThreeCards() {
  const chosenCards = [];
  for (let i = 0; i < 3; i += 1) {
    const randIndex = Math.floor(Math.random() * Object.keys(cardTitleDB).length);
    const cardTitleList = Object.keys(cardTitleDB);
    const cardTitle = cardTitleList[randIndex];
    const cardCode = cardTitleDB[cardTitle].codes[0];
    chosenCards.push(cardCodeDB[cardCode].title);
  }
  cardListTextArea.value = `${chosenCards[0]}\n${chosenCards[1]}\n${chosenCards[2]}\n`;
  cardManager.updateCardListFromTextArea(cardListTextArea.value);
}

function populateSetSelection() {
  packList.forEach((pack) => {
    const option = document.createElement('option');
    option.setAttribute('value', pack.pack_code);
    option.innerHTML = pack.name;
    setSelection.appendChild(option);
  });
  setSelection.value = packList[0].pack_code;
}

function loadOptions() {
  cardTitleDB = JSON.parse(localStorage.getItem('cardTitleDB'));
  cardCodeDB = JSON.parse(localStorage.getItem('cardCodeDB'));
  packList = JSON.parse(localStorage.getItem('packList'));

  if (!cardTitleDB) {
    localStorage.removeItem('cardTitleDB');
    localStorage.removeItem('cardCodeDB');
    localStorage.removeItem('packList');
    cardManager.setCardPreviewHTML('<span class="text-muted" data-loading>LOADING CARDS...</span>');
    fetchJson(`${window.location.origin}/api/getOptions`)
      .then((resJson) => {
        cardTitleDB = resJson.data.cardTitleDB;
        cardCodeDB = resJson.data.cardCodeDB;
        packList = resJson.data.packList;
        localStorage.setItem('cardTitleDB', JSON.stringify(cardTitleDB));
        localStorage.setItem('cardCodeDB', JSON.stringify(cardCodeDB));
        localStorage.setItem('packList', JSON.stringify(packList));
        loadThreeCards();
        populateSetSelection();
      })
      .catch((err) => {
        console.log(err.message);
      });
  } else {
    loadThreeCards();
    populateSetSelection();
  }
}

function selectTab(tabLabel) {
  // selectedTab = tabLabel;
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
  });

  setSelection.addEventListener('input', (e) => {
    cardManager.resetScroll();
    cardManager.updateCardListFromSetSelection(e.target.value);
  });

  deckURLText.addEventListener('input', (e) => {
    cardManager.resetScroll();
    cardManager.updateCardListFromDecklistURL(e.target.value);
  });

  const navSelectors = document.querySelectorAll('button[data-bs-toggle="tab"]');
  navSelectors.forEach((selector) => {
    selector.addEventListener('shown.bs.tab', (e) => {
      cardManager.resetScroll();
      selectTab(e.target.innerText);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  cardManager = new CardManager();
  cardListTextArea = document.querySelector('#cardListTextArea');
  setSelection = document.querySelector('#setSelection');
  deckURLText = document.querySelector('#deckURLText');

  assignEvents();
  loadOptions();
});
