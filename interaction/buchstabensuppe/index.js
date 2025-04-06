const container = document.getElementById("container");

function addRandomLetter(event) {
  const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z

  const letterElement = document.createElement("span");
  letterElement.classList.add("letter");
  letterElement.textContent = randomLetter;

  // Zufällige Position
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  // Zufällige Schriftgröße
  const fontSize = 20 + Math.random() * 80;

  letterElement.style.left = `${x}px`;
  letterElement.style.top = `${y}px`;
  letterElement.style.fontSize = `${fontSize}px`;

  container.appendChild(letterElement);
}

document.addEventListener("keydown", addRandomLetter);
