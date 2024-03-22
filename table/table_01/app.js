// get the table body element

// Get the button
const btnElement = document.querySelector("#btn");
  const tableBody = document.querySelector(".tableBody");

  const makeTablBody = document.createElement("tbody");

  // Make table body element using for each array method
  tableBody.querySelectorAll("tr").forEach((row) => {
    // Make rows inside the table body
    const makeRow = document.createElement("tr");

    // make cell inside the rows

    row.querySelectorAll("td").forEach((col) => {
      // create columns inside the rows
      const makeCol = document.createElement("td");

      // insert the column data into the new column
      makeCol.textContent = col.textContent;

      // append the col into the row
      makeRow.appendChild(makeCol);
    });
    makeTablBody.appendChild(makeRow);
  });
  const displayTable = () => {

  const showTableDiv = document.querySelector("#showTable");

  const makeTable = document.createElement("table");
  makeTable.appendChild(makeTablBody);
  showTableDiv.appendChild(makeTable);
};

btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  displayTable();
});
