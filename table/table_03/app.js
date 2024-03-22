const tableBody = document.querySelector(".tableBody");
const btnElement = document.querySelector("button");
const warnMsg = document.querySelector(".warn-msg");

const cars = [];

class Car {
  constructor(id, model, maker) {
    this.id = id;
    this.model = model;
    this.maker = maker;
  }
}

const addCarData = () => {
  try {
    const carIdInput = document.querySelector("#id");
    const carModelInput = document.querySelector("#model");
    const carMakerInput = document.querySelector("#maker");

    if (!carIdInput.value || !carModelInput || !carMakerInput) {
      throw new Error("Please fill all the input here!");
    }
    const carId = carIdInput.value;
    const carModel = carModelInput.value;
    const carMaker = carMakerInput.value;
    const carData = new Car(carId, carModel, carMaker);

    cars.push(carData);

    carIdInput.value = "";
    carModelInput.value = "";
    carMakerInput.value = "";

    warnMsg.textContent = "";
  } catch (error) {
    warnMsg.textContent = error.message;
  }
};
const displayCars = () => {
  // clear existing data
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  addCarData();
  cars.forEach((car) => {
    const makeRow = document.createElement("tr");

    // create cell for each id of the car
    const idCell = document.createElement("td");
    idCell.textContent = car.id;
    makeRow.appendChild(idCell);

    // create cell for each model of the car
    const modelCell = document.createElement("td");
    modelCell.textContent = car.model;
    makeRow.appendChild(modelCell);

    // create cell for each maker of the car
    const makerCell = document.createElement("td");
    makerCell.textContent = car.maker;
    makeRow.appendChild(makerCell);
    tableBody.appendChild(makeRow);
  });
};

btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  displayCars();
  document.querySelectorAll("input").textContent = "";
});


