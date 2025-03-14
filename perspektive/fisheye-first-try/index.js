function setup() {
	createCanvas(300, 300);
	background("mediumturquoise");
	triangle(190, 100, 240, 140, 240, 40);
	ellipse(115, 100, 175, 160); //körper//
	ellipse(25, 100, 23, 30); //mund//
	ellipse(27, 115, 25, 30); //mund//
	ellipse(100, 90, 110, 90); //aussen auge//
	ellipse(100, 90, 85, 90); //innen auge/
	strokeWeight(85);
	point(100, 90);
}

