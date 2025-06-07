let grid;
let creature;
let targetX;
let targetY;

function setup() {
  createCanvas(400, 400);
  grid = drawGrid(20, 20);
  fetchObstacles();
  creature = { x: 0, y: 0, direction: "right" };
  targetX = grid.length - 1;
  targetY = grid[0].length - 1;
  markCell(creature.x, creature.y, "red");
  markCell(targetX, targetY, "green");
}

function fetchObstacles() {
  fetch("http://localhost:3010/obstacles")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((obstacle) => {
        grid[obstacle.x][obstacle.y] = "obstacle";
        markCell(obstacle.x, obstacle.y, "darkgrey");
      });
    })
    .catch((error) => console.log(error));
}

function draw() {
  drawGrid(20, 20);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    moveCreature("up");
  } else if (keyCode === DOWN_ARROW) {
    moveCreature("down");
  } else if (keyCode === LEFT_ARROW) {
    moveCreature("left");
  } else if (keyCode === RIGHT_ARROW) {
    moveCreature("right");
  }
}

function moveCreature(direction) {
  let nextX = creature.x;
  let nextY = creature.y;

  if (direction === "up") {
    nextY -= 1;
  } else if (direction === "down") {
    nextY += 1;
  } else if (direction === "left") {
    nextX -= 1;
  } else if (direction === "right") {
    nextX += 1;
  }

  if (
    nextX < 0 ||
    nextX >= grid.length ||
    nextY < 0 ||
    nextY >= grid[0].length ||
    grid[nextX][nextY] === "obstacle"
  ) {
    alert("Game Over! Please click Refresh to play again.");
    return;
  }

  if (nextX === targetX && nextY === targetY) {
    markCell(creature.x, creature.y, "white");
    creature.x = nextX;
    creature.y = nextY;
    markCell(creature.x, creature.y, "red");
    alert("Congratulations! You Won!");
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
