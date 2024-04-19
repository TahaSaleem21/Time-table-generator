function generateTable() {
  var number = parseInt(document.getElementById("number").value);
  var tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = "";

  var table = document.createElement("table");
  for (var i = 1; i <= 12; i++) {
    var row = document.createElement("tr");
    row.innerHTML =
      "<td>" + number + " x " + i + "</td>" + "<td>" + number * i + "</td>";
    table.appendChild(row);
  }
  tableContainer.appendChild(table);
}
