const tableBody = document.querySelector(".tableBody");
const btnElement = document.querySelector('button');
const cars = [];

class Car {
  constructor(id, model, maker) {
    this.id = id;
    this.model = model;
    this.maker = maker;
  }
}
const displayCars = ()=>{

const car1 = new Car(78, "520e", "bmw");
const car2 = new Car(77, "Civic", "Honda");
cars.push(car2);
cars.push(car1);
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
  makerCell.textContent = car.model;
  makeRow.appendChild(makerCell);
  tableBody.appendChild(makeRow);
});

}

btnElement.addEventListener('click', displayCars);