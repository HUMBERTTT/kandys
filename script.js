function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
var images = ["globo1.jpg", "globo2.jpg", "globo3.jpg"]; // Ruta de las imágenes
var currentImageIndex = 0;
var currentImage = document.getElementById("currentImage");
var nextImage = document.getElementById("nextImage");
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");
var isTransitioning = false;

function showCurrentImage() {
  currentImage.src = images[currentImageIndex];
}

function showNextImage() {
  nextImage.src = images[(currentImageIndex + 1) % images.length];
}

function switchImages() {
  currentImage.style.opacity = 0;
  nextImage.style.opacity = 1;
  setTimeout(function () {
    currentImage.src = nextImage.src;
    currentImage.style.opacity = 1;
    nextImage.style.opacity = 0;
    isTransitioning = false;
  }, 5000);
}

function goToPreviousImage() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showNextImage();
  switchImages();
}

function goToNextImage() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showNextImage();
  switchImages();
}

prevButton.addEventListener("click", goToPreviousImage);
nextButton.addEventListener("click", goToNextImage);

showCurrentImage();
setInterval(goToNextImage, 5000);








