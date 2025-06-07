// Get references to HTML elements
const lowerInput = document.getElementById("lower-input");
const upperInput = document.getElementById("upper-input");
const button = document.getElementById("calculate-button");
const output = document.getElementById("result-list");

// Add click event listener to button
button.addEventListener("click", () => {
  // Get lower and upper input values as integers
  const lowerValue = parseInt(lowerInput.value);
  const upperValue = parseInt(upperInput.value);

  // Clear previous output
  output.innerHTML = "";

  // Determine lower and upper values
  const lower = Math.min(lowerValue, upperValue);
  const upper = Math.max(lowerValue, upperValue);

  // Loop through interval and generate output
  for (let i = lower; i <= upper; i++) {
    let line = "";
    if (i % 3 === 0) {
      line += "hip";
    }
    if (i % 7 === 0) {
      line += "hop";
    }
    if (line === "") {
      line += i;
    }
    // Create new output line
    const newLine = document.createElement("div");
    newLine.classList.add("output-line");
    newLine.textContent = line;
    // Append new output line to output
    output.appendChild(newLine);
  }
});
