var data = [];

fetch('/api/sheets')
  .then(res => res.json())
  .then(sheetData => {
    data = sheetData;
  });
