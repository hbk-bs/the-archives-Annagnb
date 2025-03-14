let x1, x2, y1, y2;
let r1 = 30, r2 = 30;  
let speed1 = 1.5, speed2 = 1.5;  

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("sketch");
  resetPositions(); 
}

function draw() {
  background(230, 230, 250, 15); 

  x1 += speed1;
  x2 -= speed2;

  if (dist(x1, y1, x2, y2) <= r1 + r2) {
  resetPositions();
  }

  fill(255, 165, 0);
  noStroke();
  ellipse(x1, y1, r1 * 2, r1 * 2);
  ellipse(x2, y2, r2 * 2, r2 * 2);

}


function resetPositions() {
  x1 = width * 0.15; // start links
  x2 = width * 0.85; // start rechts
  y1 = height / 2;
  y2 = height / 2;
  speed1 = 1.2; 
  speed2 = 1.2;
}
