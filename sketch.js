let firstStar;
let secondStar;
let stars;
let starSize;

function setup() {
  createCanvas(500, 500);
  fill("purple");
  stroke("purple");
  firstStar = {x: 20, y: 20};
  starSize = 10;
  stars = [firstStar];
}

function draw() {
  background(220);
}

function mousePressed() {
  console.log("You clicked!");
}

function keyPressed() {
  console.log("You pressed a key!");
}

function displayStars() {
  for (let i = 0; i < stars.length; i++) {
    ellipse(stars[i].x, stars[i].y, 10);
  }
}

function connectStars() {
  for (let i = 0; i < stars.length; i++) {
    if (i > 0) {
      line(stars[i-1].x, stars[i-1].y, stars[i].x, stars[i].y);
    }
  }
}