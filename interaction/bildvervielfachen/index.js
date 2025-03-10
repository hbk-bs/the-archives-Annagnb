const imageSrc =
  "https://raw.githubusercontent.com/hbk-bs/the-archives-Annagnb/refs/heads/main/assets/images/IMG_0521.WEBP";

function addImage(event) {
  const imgElement = document.createElement("img");
  imgElement.src = imageSrc;
  imgElement.alt = "Klick Bild";

  document.getElementById("container").appendChild(imgElement);
}

document.body.addEventListener("click", addImage);
