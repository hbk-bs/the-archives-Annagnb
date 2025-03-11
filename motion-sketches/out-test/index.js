let t = 0; 

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("sketch");
  
}

function draw() {
  background(255,255,255);

  fill(230,230,250);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height / 2, 100, 100);

  
  let startX = width / 2 - 15; 
  let endX = width; 
  
  let x = startX + (endX - startX) * t;
  let y = height / 2; 

  fill(270,160,0);
  ellipse(x, y, 20);

  
  t += 0.01;

  //zurücksetzen/reset
  if (t >= 1) {
    t = 0; 
  }
}

function ease(t) {
  return t * t * (3 - 2 * t); // Smoothstep
}


