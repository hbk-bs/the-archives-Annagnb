const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);
const h = (angle) => ((angle % 360) + 360) % 360;

function setup() {
	createCanvas(300, 300);
	colorMode(HSB);
	background(0, 0, 100);

	const circleSize = s(0.07);
	const spacing = s(0.1);

	for (let yPos = spacing / 2; yPos < height; yPos += spacing) {
		for (let xPos = spacing / 2; xPos < width; xPos += spacing) {
			fill(0, 0, 0);
			circle(xPos, yPos, circleSize);

			const centerX = x(0.5);
			const centerY = y(0.5);
			const largeCircleSize = s(0.9);
			noStroke();
			fill(0, 0, 100);
			circle(centerX, centerY, largeCircleSize);

			const centerX2 = x(0.5);
			const centerY2 = y(0.5);
			const mediumCircleSize = s(0.75);
			fill(0, 0, 0);
			circle(centerX, centerY, mediumCircleSize);

			const centerX3 = x(0.5);
			const centerY3 = y(0.5);
			const mediumCircleSize2 = s(0.72);
			fill(0, 0, 100);
			circle(centerX, centerY, mediumCircleSize2);

			const centerX4 = x(0.5);
			const centerY4 = y(0.5);
			const mediumCircleSize3 = s(0.68);
			fill(0, 0, 0);
			circle(centerX, centerY, mediumCircleSize3);
		}
	}
}


