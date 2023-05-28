/*
var currentImageIndex = 0;
var images = document.querySelectorAll("Carousel");
var prevButton = document.getElementById("prevBtn");
var nextButton = document.getElementById("nextBtn");

function showImage(index) {
  images[currentImageIndex].style.display = "none";
  images[index].style.display = "block";
  currentImageIndex = index;
}

function nextImage() {
  var newIndex = currentImageIndex + 1;
  if (newIndex >= images.length) {
    newIndex = 0;
  }
  showImage(newIndex);
}

function prevImage() {
  var newIndex = currentImageIndex - 1;
  if (newIndex < 0) {
    newIndex = images.length - 1;
  }
  showImage(newIndex);
}

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);

// Mostrar la primera imagen al cargar la página
showImage(0);


var carousel = document.querySelector(".carousel");
var prevButton = document.querySelector(".carousel-prev");
var nextButton = document.querySelector(".carousel-next");

var slideIndex = 0;
var slides = carousel.querySelectorAll("img");
var totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }
  
  carousel.style.transform = "translateX(" + (-index * 100) + "%)";
  slideIndex = index;
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showSlide(0);*/


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
