const heart = document.getElementById("heart");
let scale = 0.2; // Anfangsgröße
const maxScale = 8;

heart.addEventListener("click", () => {
  scale += 0.2;

  if (scale >= maxScale) {
    scale = 0.2;
  }

  heart.style.transform = `scale(${scale})`;
});

document.body.addEventListener("click", (event) => {
  if (event.target !== heart) {
    // Prüft ob der Klick nicht auf Herz war
    scale = 0.2; // Setzt aufAnfangsgröße
    heart.style.transform = `scale(${scale})`;
  }
});
