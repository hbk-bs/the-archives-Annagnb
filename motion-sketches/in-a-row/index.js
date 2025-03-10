
let y1, y2, y3; 

function setup() {
  createCanvas(400, 400);
  background(230, 230, 250); 
  y1 = height; 
  y2 = height; 
  y3 = height; 
}

function draw() {
  background(230, 230, 250, 5); 

  // Ease-Effekt?
  y1 -= 1 + 0.5 * sin(frameCount * 0.05); 
  y2 -= 1 + 0.5 * sin(frameCount * 0.07); 
  y3 -= 1 + 0.5 * sin(frameCount * 0.09); 

  
  noStroke ();
  fill (280, 140, 0);
  ellipse(width / 4, y1, 30); 
  ellipse(width / 2, y2, 30); 
  ellipse(3 * width / 4, y3, 30); 

  // Wenn Kreise oben, setz Position back
  if (y1 < 0) y1 = height;
  if (y2 < 0) y2 = height;
  if (y3 < 0) y3 = height;
}