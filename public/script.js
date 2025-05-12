var data = [];

fetch('/api/sheets')
  .then(res => res.json())
  .then(sheetData => {
    data = sheetData;

    const list = document.getElementById("name-list");
    const frag = document.createDocumentFragment();

    console.log(data);

    data.flat().forEach(item => {
      const option = document.createElement("option");
      option.value = item.Name;
      frag.appendChild(option);
    });

    list.appendChild(frag);
  });

//dynamic dropdown values