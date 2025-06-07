// Create an h1 element with some visible text
const heading = document.createElement('h1');
heading.textContent = 'Content Created by JavaScript Code';

// Create a table element to hold the chessboard-like pattern
const table = document.createElement('table');

// Loop through 10 rows and 10 columns to create the chessboard-like pattern
for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');
  
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement('td');
    
    // Determine the color of the cell based on its position
    if ((i + j) % 2 === 0) {
      cell.style.backgroundColor = 'lightgray';
    } else {
      cell.style.backgroundColor = 'gray';
    }
    
    // Create a span element to hold the cell number
    const number = document.createElement('span');
    number.textContent = `${i}${j}`.padStart(2, '0');
    
    // Add the number to the cell
    cell.appendChild(number);
    
    // Add the cell to the row
    row.appendChild(cell);
  }
  
  // Add the row to the table
  table.appendChild(row);
}

// Add the heading and table to the body of the HTML document
document.body.appendChild(heading);
document.body.appendChild(table);
