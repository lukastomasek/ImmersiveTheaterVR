
const $about = document.getElementById('about-btn')
const $work = document.getElementById('work-btn')
const $renders = document.getElementById('renders-btn')

let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"
  dots[slideIndex-1].className += " active"
}

$about.addEventListener('click',()=>{
  let ele = document.querySelector(".about");
  ele.scrollIntoView({ block: "end", behavior: "smooth" });    
})
$work.addEventListener('click',()=>{
  let ele = document.querySelector(".work");
  ele.scrollIntoView({ block: "start", behavior: "smooth" });   
})
$renders.addEventListener('click',()=>{
  let ele = document.querySelector(".renders");
  ele.scrollIntoView({ block: "start", behavior: "smooth" });   
})