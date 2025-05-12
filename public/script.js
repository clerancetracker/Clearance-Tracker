var data = [];

fetch('/api/sheets')
  .then(res => res.json())
  .then(sheetData => {
    data = sheetData;
  });

const list = document.getElementById("name-list");

for (var i = 0; i < data.length; i++) {
  for (var j = 0; j < data[i].length; i++){
    const list_option = document.createElement("option");
    const node = document.createTextNode(data[i][j].Name);
    list_option.appendChild(node);
    list.appendChild(list_option);
  }
}