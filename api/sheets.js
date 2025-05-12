let sheetData = [];

fetch("https://script.google.com/macros/s/AKfycbx_85W2Kdj0y5SqS9ykBjmyHvUGEl-vKj4NbmRTwNHEHNvWOrwhzrEvZUb14B_RFXfCjw/exec")
  .then(response => response.json())
  .then(data => {
    sheetData = data;
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });