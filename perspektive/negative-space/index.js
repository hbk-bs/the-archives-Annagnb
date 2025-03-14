function setup() {
	createCanvas(430, 200);
	background("mediumturquoise");
	noStroke();
	triangle(340, 100, 410, 150, 410, 50);
	ellipse(290, 100, 120, 100); //körper//
	ellipse(230, 95, 15, 15); //mund//
	ellipse(230, 105, 15, 15); //mund//
	ellipse(270, 85, 30, 20); //aussen auge//
	ellipse(270, 85, 15, 20); //innen auge//
	strokeWeight(10);
	point(270, 85);

	strokeWeight(1);
	triangle(20, 150, 20, 50, 90, 100);
	ellipse(140, 100, 120, 100); //körper//
	ellipse(200, 95, 15, 15); //mund//
	ellipse(200, 105, 15, 15); //mund//
	ellipse(160, 85, 30, 20); //aussen auge//
	ellipse(160, 85, 15, 20); //innen auge//
	strokeWeight(10);
	point(160, 85);
}
