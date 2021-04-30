// eslint-disable-next-line import/extensions
import { loadSettings, saveSettings } from './helpers.js';

let settings;

function populateSettings() {
  document.querySelector('#scanSourceSelect')
    .value = settings.scanSourcePriority;
  document.querySelector('#backSideArtCheckbox')
    .checked = (settings.includeCardBacks === 'true');
  document.querySelector('#pageSizeSelect')
    .value = settings.PdfPageSize;
  document.querySelector('#fullCutlinesCheckbox')
    .checked = (settings.fullCutLines === 'true');
  document.querySelector('#placementSelect')
    .value = settings.LmMpcPlacement;
}

function assigngSettingsEvents() {
  document.querySelector('#scanSourceSelect')
    .addEventListener('input', (e) => {
      settings.scanSourcePriority = e.target.value;
    });

  document.querySelector('#backSideArtCheckbox')
    .addEventListener('change', (e) => {
      settings.includeCardBacks = e.target.checked;
    });

  document.querySelector('#pageSizeSelect')
    .addEventListener('input', (e) => {
      settings.PdfPageSize = e.target.value;
    });

  document.querySelector('#fullCutlinesCheckbox')
    .addEventListener('change', (e) => {
      settings.fullCutLines = e.target.checked;
    });

  document.querySelector('#placementSelect')
    .addEventListener('input', (e) => {
      settings.LmMpcPlacement = e.target.value;
    });

  document.getElementById('saveSettingsBtn')
    .addEventListener('click', () => {
      saveSettings(settings);
      // eslint-disable-next-line no-undef
      const saveSettingsToast = new bootstrap.Toast(document.getElementById('saveSettingsToast'));
      saveSettingsToast.show();
    });
}

document.addEventListener('DOMContentLoaded', () => {
  settings = loadSettings();
  populateSettings();
  assigngSettingsEvents();
});
