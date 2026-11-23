let angle = 0;                
let orbitRadius = 180;         
let angleSpeed = 0.025;        
let isPaused = false;          
let stars = [];               

function setup() {
  const canvas = createCanvas(800, 500);
  canvas.parent("canvas-holder");

  for (let i = 0; i < 90; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3)
    });
  }
}

function draw() {
  background(5, 15, 35);

  noStroke();
  fill(220, 232, 255, 190);
  for (let star of stars) {
    circle(star.x, star.y, star.size);
  }

  const centerX = width / 2;
  const centerY = height / 2;

  noFill();
  stroke(91, 126, 177);
  strokeWeight(2);
  circle(centerX, centerY, orbitRadius * 2);

  noStroke();
  fill(255, 183, 52);
  circle(centerX, centerY, 76);
  fill(255, 220, 115, 110);
  circle(centerX, centerY, 96);

  const planetX = centerX + orbitRadius * cos(angle);
  const planetY = centerY + orbitRadius * sin(angle);

  fill(67, 169, 255);
  circle(planetX, planetY, 34);
  fill(170, 220, 255, 150);
  circle(planetX - 7, planetY - 7, 10);

  if (!isPaused) {
    angle += angleSpeed;
  }

  noStroke();
  fill(245);
  textAlign(LEFT, TOP);
  textSize(16);
  text("SPACE: Pause / Resume", 18, 18);
  text("+ or UP: Increase speed", 18, 42);
  text("- or DOWN: Decrease speed", 18, 66);

  textAlign(RIGHT, TOP);
  text("Speed: " + nf(angleSpeed, 1, 3), width - 18, 18);
  text(isPaused ? "PAUSED" : "RUNNING", width - 18, 42);
}

function keyPressed() {
  if (key === " ") {
    isPaused = !isPaused;
  }

  if (key === "+" || key === "=" || keyCode === UP_ARROW) {
    angleSpeed = min(angleSpeed + 0.005, 0.1);
  }

  if (key === "-" || keyCode === DOWN_ARROW) {
    angleSpeed = max(angleSpeed - 0.005, 0.005);
  }
}
