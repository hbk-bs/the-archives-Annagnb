const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
	createCanvas(250, 250);
	colorMode(HSL);
	noLoop();
	
}

function draw() {
	
	let numRects = 10; 
	let startSize = s(0.9); 
	let colorHue = 240; 
	let colorSaturation = 50;
	let colorLightness = 30; 

	for (let i = 0; i < numRects; i++) {
	
		let size = startSize * (1 - i * 0.1); 
		let posX = width / 2 - size / 2;
		let posY = height / 2 - size / 2;

		fill(colorHue, colorSaturation, colorLightness + i * 5);
		noStroke();
		rect(posX, posY, size, size);
		
	}
}


