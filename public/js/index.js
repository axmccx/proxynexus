// eslint-disable-next-line max-classes-per-file
let cardTitleDB;
let cardCodeDB;
let packList;
// let cardListTextArea;
// let deckURLText;
// let setSelection;
let cardManager;

const IMAGE_BASE_DIR = 'https://proxynexus.blob.core.windows.net/version2/';
const NRDB_CARD_DIR = 'https://netrunnerdb.com/en/card/';

function t2key(t) {
  return t.trim().toLowerCase().replace(/:/g, '').replace(new RegExp(' ', 'g'), '__');
}

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
    this.cardListTextArea = document.querySelector('#cardListTextArea');
    this.cardPreview = document.querySelector('#cardPreview');
    this.cardList = [];
    // all art component

    this.cardListTextArea.addEventListener('input', () => {
      this.updateCardList();
      this.buildCardPreviewHTML();
    });
  }

  setCardList(newText) {
    this.cardListTextArea.value = newText;
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

  updateCardList() {
    const input = this.cardListTextArea.value.split(/\n/);
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
  }
  // method to make entire alt art selector html
}

// eslint-disable-next-line consistent-return
async function fetchOptions() {
  const response = await fetch(`${window.location.origin}/api/getOptions`);
  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }
  return response.json();
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
  cardManager.setCardList(`${chosenCards[0]}\n${chosenCards[1]}\n${chosenCards[2]}\n`);
  cardManager.updateCardList();
  cardManager.buildCardPreviewHTML();
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
    fetchOptions()
      .then((resJson) => {
        if (resJson.code === 200) {
          cardTitleDB = resJson.data.cardTitleDB;
          cardCodeDB = resJson.data.cardCodeDB;
          packList = resJson.data.packList;
          localStorage.setItem('cardTitleDB', JSON.stringify(cardTitleDB));
          localStorage.setItem('cardCodeDB', JSON.stringify(cardCodeDB));
          localStorage.setItem('packList', JSON.stringify(packList));
          loadThreeCards();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  } else {
    loadThreeCards();
  }
}

// function assignEvents() {
// }

document.addEventListener('DOMContentLoaded', () => {
  cardManager = new CardManager();
  // deckURLText = document.querySelector('#deckURLText');
  // setSelection = document.querySelector('#setSelection');

  // assignEvents();
  loadOptions();
});
