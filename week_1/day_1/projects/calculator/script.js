const calBtn = document.querySelector(".cal");


calBtn.addEventListener("click", () => {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  let operator = prompt("Enter the operation (+, -, *, /):");

  let result;

  if (operator == "+") {
    alert((result = num1 + num2));
  } else if (operator == "-") {
    alert((result = num1 - num2));
  } else if (operator == "*") {
    alert((result = num1 * num2));
  } else if (operator == "/") {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      alert("Error: Division by zero is not allowed.");
      result = null;
    }
  }
});
