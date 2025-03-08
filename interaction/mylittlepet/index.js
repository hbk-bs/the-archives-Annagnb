let img;
let img2;
let images = [];
let imageIndex = 0;

let kisses = []; // Array zum Speichern der kisses

const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

let cheekColor;
let targetColor;
let pinkIntensity = 0;

function preload() {
  img = loadImage(
    "https://raw.githubusercontent.com/hbk-bs/the-archives-Annagnb/main/assets/images/hamster_grundlage.png"
  );
  img2 = loadImage(
    "https://raw.githubusercontent.com/hbk-bs/the-archives-Annagnb/main/assets/images/25024B2B-7036-42DD-AD07-682EBFE2CF40.jpg"
  );

  // Bilder zum Array hinzufügen
  images.push(img);
  images.push(img2);
}

function setup() {
  const canvas = createCanvas(600, 600);
  canvas.parent("myCanvas");
  noStroke();

  cheekColor = color(255, 220, 140);
  targetColor = cheekColor;
}

function draw() {
  background(255);

  let imgWidth = 600;
  let imgHeight =
    (images[imageIndex].height / images[imageIndex].width) * imgWidth; // Beibehaltung Seitenverhältnis

  let imgX = (width - imgWidth) / 2;
  let imgY = (height - imgHeight) / 2;

  // Zeig aktuelle Bild (skaliert,zentriert)
  image(images[imageIndex], imgX, imgY, imgWidth, imgHeight);

  // Unsichtbare Ohren zeichnen (nur zur Interaktion)
  fill(0, 0);
  ellipse(x(0.32), y(0.2), s(0.15)); // Linkes Ohr
  ellipse(x(0.68), y(0.2), s(0.15)); // Rechtes Ohr

  //unsichtbare Körper fur interaktion
  fill(0, 0);
  ellipse(x(0.5), y(0.5), s(0.65), s(0.7));
  ellipse(x(0.5), y(0.65), s(0.7), s(0.45));

  // Übergang der Wangenfarbe
  cheekColor = lerpColor(
    color(255, 220, 140),
    color(255, 100, 150),
    pinkIntensity
  );
  fill(cheekColor);
  ellipse(x(0.3), y(0.5), s(0.1)); // Linke Wange
  ellipse(x(0.7), y(0.5), s(0.1)); // Rechte Wange

  // Augen
  fill(0);
  ellipse(x(0.4), y(0.4), s(0.08));
  ellipse(x(0.6), y(0.4), s(0.08));
  drawPupil(x(0.4), y(0.4), s(0.02));
  drawPupil(x(0.6), y(0.4), s(0.02));

  // Herzchen Emojis anzeigen
  for (let i = 0; i < kisses.length; i++) {
    let kiss = kisses[i];
    textSize(50); // Größe des Emojis
    textAlign(CENTER, CENTER);
    fill(255, 105, 180); // Pinke Farbe für das Herz
    text(kiss.emoji, kiss.x, kiss.y);
  }
}

function mousePressed() {
  // Überprüfe, ob der Klick in der Nähe des linken Ohres ist
  if (dist(mouseX, mouseY, x(0.32), y(0.2)) < s(0.15) / 2) {
    showSecondImage();
  }

  // Überprüfe, ob der Klick in der Nähe des rechten Ohres ist
  if (dist(mouseX, mouseY, x(0.68), y(0.2)) < s(0.15) / 2) {
    showSecondImage();
  }
}

function showSecondImage() {
  imageIndex = 1;
  setTimeout(() => {
    imageIndex = 0;
  }, 1000);
}

// Funktion für die Maus, um die Pupillen zu zeichnen
function drawPupil(eyeX, eyeY, pupilSize) {
  push();
  translate(eyeX, eyeY);
  let angle = atan2(mouseY - eyeY, mouseX - eyeX);
  rotate(angle);
  let maxOffset = s(0.02);
  translate(maxOffset, 0);
  fill(255);
  ellipse(0, 0, pupilSize);
  pop();
}

// Funktion, um die Wangenfarbe bei Mausbewegung zu ändern
function mouseDragged() {
  const distToCenter = dist(mouseX, mouseY, x(0.5), y(0.55));
  if (distToCenter < s(0.35)) {
    pinkIntensity = min(pinkIntensity + 0.02, 1); // Intensität erhöhen
  }
}

// Funktion für Mausbewegung, um die Wangenfarbe zurückzusetzen, wenn die Maus entfernt wird
function mouseMoved() {
  const distToCenter = dist(mouseX, mouseY, x(0.5), y(0.55));
  if (distToCenter >= s(0.35)) {
    pinkIntensity = max(pinkIntensity - 0.05, 0); //
  }
}

function keyPressed() {
  if (key === "s") {
    save("hamster.png");
  }

  // Versuche, eine Position innerhalb des Körpers zu finden
  for (let i = 0; i < 100; i++) {
    // Maximal 100 Versuche
    let kissX = random(width * 0.2, width * 0.8); // Generiere Position näher am Körper
    let kissY = random(height * 0.3, height * 0.7); // Generiere Position näher am Körper

    if (isInsideBodyEllipse(kissX, kissY)) {
      let kiss = createkiss(kissX, kissY);
      kisses.push(kiss);

      setTimeout(() => {
        kisses = kisses.filter((k) => k !== kiss);
      }, 2000);
      break;
    }
  }
}

function isInsideBodyEllipse(xPos, yPos) {
  // Große obere Ellipse
  const inUpperEllipse =
    ((xPos - x(0.5)) / s(0.65)) ** 2 + ((yPos - y(0.5)) / s(0.7)) ** 2 <= 1;

  // Kleinere untere Ellipse
  const inLowerEllipse =
    ((xPos - x(0.5)) / s(0.7)) ** 2 + ((yPos - y(0.65)) / s(0.45)) ** 2 <= 1;

  return inUpperEllipse || inLowerEllipse;
}

function createkiss(x, y) {
  return {
    emoji: "💋",
    x: x,
    y: y
  };
}
