let cardTitleDB;
let cardCodeDB;
let packList;
let cardListTextArea;
let deckURLText;
let setSelection;
let cardPreview;
let cardCodes = [];

const IMAGE_BASE_DIR = 'https://proxynexus.blob.core.windows.net/version2/';
const NRDB_CARD_DIR = 'https://netrunnerdb.com/en/card/';

function t2key(t) {
  return t.trim().toLowerCase().replace(/:/g, '').replace(new RegExp(' ', 'g'), '__');
}

function updateCodesFromCardList() {
  cardCodes = [];
  const input = cardListTextArea.value.split(/\n/);
  const cardInputRegex = /([0-9] |[0-9]x )?(.*)/;

  input.forEach((entry) => {
    const match = cardInputRegex.exec(entry);
    const count = (match[1] === undefined) ? 1 : parseInt(match[1], 10);
    const cardKey = t2key(match[2]);

    if (cardKey !== '' && cardKey in cardTitleDB) {
      for (let i = 0; i < count; i += 1) {
        cardCodes.push(cardTitleDB[cardKey].codes[0]);
      }
    }
  });
  console.log(cardCodes);
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

function buildCardPreviewHTML(codes) {
  let newHtml = '';
  codes.forEach((code) => {
    const [frontImg, backImg] = getCardImgs(code);
    const { title } = cardCodeDB[code];
    const frontImgURL = `${IMAGE_BASE_DIR}${frontImg}`;
    newHtml += `<a href="${NRDB_CARD_DIR}${code}" title="" target="NetrunnerCard">`;
    newHtml += `<img class="card" id="prev${code}" src="${frontImgURL}" alt="${code}" />`;
    newHtml += `<span class="label">${code} ${title}</span>`;
    newHtml += '</a>';
    if (backImg !== '') {
      const backImgURL = `${IMAGE_BASE_DIR}${backImg}`;
      newHtml += `<a class="backImgPreview" id="prev${code}backLink" style="display: none;" href="${NRDB_CARD_DIR}${code}" title="" target="NetrunnerCard">`;
      newHtml += `<img class="card" id="prev${code}backImg" src=${backImgURL} alt=${code}back"/>`;
      newHtml += `<span class="label">${code} ${title}</span>`;
      newHtml += '</a>';
    }
  });
  cardPreview.innerHTML = newHtml;
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
  cardListTextArea.value = `${chosenCards[0]}\n${chosenCards[1]}\n${chosenCards[2]}\n`;
}

function loadOptions() {
  cardTitleDB = JSON.parse(localStorage.getItem('cardTitleDB'));
  cardCodeDB = JSON.parse(localStorage.getItem('cardCodeDB'));
  packList = JSON.parse(localStorage.getItem('packList'));

  if (!cardTitleDB) {
    localStorage.removeItem('cardTitleDB');
    localStorage.removeItem('cardCodeDB');
    localStorage.removeItem('packList');
    cardPreview.innerHTML = '<span class="text-muted" data-loading>LOADING CARDS...</span>';
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
          updateCodesFromCardList();
          buildCardPreviewHTML(cardCodes);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  } else {
    loadThreeCards();
    updateCodesFromCardList();
    buildCardPreviewHTML(cardCodes);
  }
}

function assignEvents() {
  cardListTextArea.addEventListener('input', () => {
    updateCodesFromCardList();
    buildCardPreviewHTML(cardCodes);
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  cardListTextArea = document.querySelector('#cardListTextArea');
  deckURLText = document.querySelector('#deckURLText');
  setSelection = document.querySelector('#setSelection');
  cardPreview = document.querySelector('#cardPreview');

  assignEvents();
  loadOptions();
});
