var data = [];

fetch('/api/sheets')
  .then(res => res.json())
  .then(sheetData => {
    data = sheetData;
  });

const list = document.getElementById("name-list");

for (var i = 0; i < data.length; i++) {
  data[i].forEach(item => {
    const option = document.createElement("option");
    option.value = item.Name;
    list.appendChild(option);
  });
}