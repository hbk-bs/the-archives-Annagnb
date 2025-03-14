const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
	createCanvas(250, 250);
	colorMode(HSB);
	background(17, 52, 100);
	push();
	//translate(x(0.5), y(0.5));
	const d = s(0.5);

	stroke(0, 0, 0);
	strokeWeight(2);
	line(0, height / 1.3, width, height / 1.3);
	line(0, height / 3, width, height / 3);

	noStroke();
	fill(0, 0, 100);
	ellipse(x(0.3), y(0.51), s(0.5), s(0.5));
	fill(0, 0, 50);
	ellipse(x(0.8), y(0.23), s(0.2), s(0.2));
}

function draw() {}
