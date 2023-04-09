const calculateBtn = document.getElementById('calculate-btn');
const heightInput = document.getElementById('height');
const massInput = document.getElementById('mass');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const height = heightInput.value;
  const mass = massInput.value;

  if (!height || !mass) {
    resultDiv.textContent = 'Please enter both height and mass.';
    return;
  }

  const bmi = (mass / Math.pow(height / 100, 2)).toFixed(2);

  resultDiv.textContent = `Your BMI is ${bmi}.`;
});
