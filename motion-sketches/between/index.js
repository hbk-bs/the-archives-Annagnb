let t = 0; 
let direction = 1; 

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("sketch");
}

function draw() {
  background(255,255,255,50);

  fill(230,230,250,);
  noStroke();
  rectMode(CENTER);
  let rect1X = width / 4.5; 
  let rect1Y = height / 2;
  rect(rect1X, rect1Y, 40, 40);

  let rect2X = (3 * width) / 4; 
  let rect2Y = height / 2;
  rect(rect2X, rect2Y, 40, 40);

  let startX = rect1X + 30;  
  let endX = rect2X - 30;   
  let x = startX + (endX - startX) * t; // Position Kreis
  let y = height / 2;        

  fill (260,160,0);
  ellipse (x, y, 20);

  t += 0.02 * direction;

  // Richtung ändern, wenn Kreis am rect
  if (t >= 1 || t <= 0) {
    direction *= -1; // Umkehren 
  }
}

function ease(t) {
  return t * t * (3 - 2 * t); // Smoothstep
}
