const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
	createCanvas(300, 200);

	colorMode(HSB);
	background(178, 66, 82);

	drawFish(width / 2, height / 2, 100);
}

function drawFish(x, y, size) {
	push();
	translate(x, y); 

	
	fill(17, 52, 100);
	noStroke();
	triangle(
		-size * 0.5,
		0, 
		-size * 1.0,
		-size * 0.15, 
		-size * 1.1,
		size * 0.1 
	);

	
	noStroke();
	ellipse(0, 0, size * 1.2, size * 0.6); 

	
	fill(0, 0, 100);
	ellipse(size * 0.25, -size * 0.15, size * 0.15, size * 0.1); 
	ellipse(size * 0.25, size * 0.15, size * 0.15, size * 0.1); 

	
	fill(0, 0, 0);
	circle(size * 0.27, -size * 0.15, size * 0.04 * 2);
	circle(size * 0.27, size * 0.15, size * 0.04 * 2);

	
	fill(6, 12, 100);
	ellipse(-size * 0.3, -size * 0.3, size * 0.3, size * 0.15);
	ellipse(-size * 0.3, size * 0.3, size * 0.3, size * 0.15);

	pop();
}


