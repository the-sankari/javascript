let grid;
let creature;
let targetX;
let targetY;

function setup() {
  createCanvas(400, 400);
  grid = drawGrid(20, 20);
  creature = { x: 0, y: 0, direction: "right" };
  targetX = grid.length - 1;
  targetY = grid[0].length - 1;
  markCell(creature.x, creature.y, "red");
  markCell(targetX, targetY, "green");
  let failMessage = document.getElementById('failMessage');
let winMessage = document.getElementById('winMessage');
}

function draw() {
  drawGrid(20, 20);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    creature.direction = "up";
    moveCreature();
  } else if (keyCode === DOWN_ARROW) {
    creature.direction = "down";
    moveCreature();
  } else if (keyCode === LEFT_ARROW) {
    creature.direction = "left";
    moveCreature();
  } else if (keyCode === RIGHT_ARROW) {
    creature.direction = "right";
    moveCreature();
  }
}

function moveCreature() {
  let nextX = creature.x;
  let nextY = creature.y;

  if (creature.direction === "up") {
    nextY -= 1;
  } else if (creature.direction === "down") {
    nextY += 1;
  } else if (creature.direction === "left") {
    nextX -= 1;
  } else if (creature.direction === "right") {
    nextX += 1;
  }

  if (nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length) {
    // alert("Game over");
    failMessage.textContent = "Game Over";
    if (window.confirm('Game Over! Do you want to play again?')) {
        window.location.reload();
      }
    return;
  }

  if (nextX === targetX && nextY === targetY) {
    markCell(creature.x, creature.y, "white");
    creature.x = nextX;
    creature.y = nextY;
    markCell(creature.x, creature.y, "red");
    winMessage.textContent = "Congratulations!!"
    return;
  }

  markCell(creature.x, creature.y, "white");
  creature.x = nextX;
  creature.y = nextY;
  markCell(creature.x, creature.y, "red");
}

function markCell(x, y, color) {
  fill(color);
  noStroke();
  rect(x * 20, y * 20, 20, 20);
}

function drawGrid(rows, cols) {
  let arr = new Array(rows);
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
      arr[i][j] = 0;
      stroke(0);
      noFill();
      rect(i * 20, j * 20, 20, 20);
    }
  }
  return arr;
}
