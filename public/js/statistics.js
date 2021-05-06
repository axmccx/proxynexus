// eslint-disable-next-line import/extensions
import { fetchJson } from './helpers.js';

function loadStats() {
  fetchJson('/api/getStats')
    .then((resJson) => {
      const labels = resJson.data.downloadsCount.map((e) => (e.createdOn));
      const data = resJson.data.downloadsCount.map((e) => (e.count));
      const ctx = document.getElementById('dailyDownloadsChart');
      // eslint-disable-next-line no-unused-vars,no-undef
      const dailyDownloadsChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor: '#007bff',
          }],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          responsive: false,
        },
      });
      const table = document.getElementById('recentDownloadsTableBody');
      resJson.data.recentDownloads.forEach((entry) => {
        let requestText;
        if (entry.request.startsWith('http')) {
          requestText = `<a href="${entry.request}" target="_blank" rel="noopener">${entry.request}</a>`;
        } else {
          requestText = entry.request.replace(/\n/g, '<br />');
        }

        let downloadBtnHTML;
        if (entry.is_download_available) {
          downloadBtnHTML = `<button type="button" id="download${entry.id}" class="btn btn-primary" onClick="window.open('/api/getFile/${entry.id}', '_blank')">Download</button>`;
        } else {
          downloadBtnHTML = 'Cache Expired';
        }

        const row = table.insertRow();
        const date = row.insertCell(0);
        date.innerHTML = new Date(entry.date).toLocaleString();
        const type = row.insertCell(1);
        type.innerHTML = entry.type;
        const selection = row.insertCell(2);
        selection.innerHTML = entry.selection;
        const request = row.insertCell(3);
        request.innerHTML = requestText;
        const downloadBtn = row.insertCell(4);
        downloadBtn.innerHTML = downloadBtnHTML;
      });
    }).catch((err) => {
      console.log(err.message);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  loadStats();
});
