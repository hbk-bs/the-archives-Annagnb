let currentColor;

const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
  let canvas = createCanvas(600, 500);
  canvas.parent("canvas-container");
  noStroke();

  currentColor = color(random(255), random(255), random(255));

  background(255);
  drawGummibaerchen();
}

function drawGummibaerchen() {
  fill(currentColor);

  ellipse(x(0.5), y(0.33), s(0.3), s(0.32)); // Kopf
  ellipse(x(0.38), y(0.2), s(0.09), s(0.1)); // Linkes Ohr
  ellipse(x(0.62), y(0.2), s(0.09), s(0.1)); // Rechtes Ohr
  ellipse(x(0.5), y(0.6), s(0.32), s(0.4)); // Körper
  ellipse(x(0.35), y(0.6), s(0.1), s(0.14)); // Linker Arm
  ellipse(x(0.65), y(0.6), s(0.1), s(0.14)); // Rechter Arm
  ellipse(x(0.4), y(0.79), s(0.17), s(0.16)); // Linkes Bein
  ellipse(x(0.6), y(0.79), s(0.17), s(0.16)); // Rechtes Bein

  fill(255, 100, 100);

  // Optional: Schnauze oder Nase (auskommentiert)
  // fill(255, 100, 100);
  // ellipse(x(0.5), y(0.35), s(0.08), s(0.05)); // Schnauze
  //fill(255, 255, 255, 150);

  noStroke();
}

function changeColor() {
  currentColor = color(random(255), random(255), random(255));

  background(255);

  drawGummibaerchen();
}
