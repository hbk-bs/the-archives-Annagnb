
let x = 0;
let y = 0;

function setup() {
    const canvas = createCanvas(300, 300); 
    canvas.parent("sketch"); 
    background (230, 230, 250)
}

function draw() {
   background(color(230, 230, 250, 2)); 

    let angle = frameCount * 0.1; 
    let radius = (frameCount * 0.4) % 200; 

    x = width / 2 + radius * cos(angle); 
    y = height / 2 + radius * sin(angle); 

    noStroke();
    fill(290, 140, 0);

    x += 0.5;

    ellipse(x, y, 10, 10); 
}

