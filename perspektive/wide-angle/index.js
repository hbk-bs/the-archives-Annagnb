const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
	createCanvas(700, 400);
	colorMode(HSB);
	background(0, 0, 50);

	// Tisch
	stroke(30, 60, 60);
	fill(40, 30, 91);
	rect(x(0), y(0.9), x(5), s(5));
	fill("tan");
	rect(x(0), y(0.55), x(1), s(0.2));

	// Aquarium
	stroke(195, 40, 95);
	fill(177, 70, 85);
	rect(x(0.14), y(0.1), s(0.43), s(0.43)); // Aqua Rechteck vorne
	quad(x(0.57), y(0.1), x(0.67), y(0.0125), x(0.67), y(0.7), x(0.57), y(0.85)); // Linke Aqua-Form
	quad(x(0.57), y(0.1), x(0.67), y(0.0125), x(0.23), y(0.0125), x(0.14), y(0.1));

	stroke(270, 50, 80);
	fill(240, 15, 100);
	triangle(x(0.37), y(0.275), x(0.47), y(0.375), x(0.47), y(0.15));
	ellipse(x(0.3), y(0.275), s(0.18), s(0.16));

	stroke(6, 60, 100);
	fill(17, 40, 100);
	ellipse(x(0.21), y(0.27), s(0.025), s(0.025));
	ellipse(x(0.21), y(0.295), s(0.025), s(0.025));

	stroke(0, 0, 0);
	fill(0, 0, 100);
	ellipse(x(0.27), y(0.24), s(0.06), s(0.04));
	fill(0, 0, 0);
	strokeWeight(22);
	point(x(0.27), y(0.235));
}
