function openModal(img){
let modal = document.getElementById("imgModal");
let modalImg = document.getElementById("fullImg");

modal.style.display = "flex";   // force show
modalImg.src = img.src;

// scroll lock (VERY IMPORTANT for mobile)
document.body.style.overflow = "hidden";
}

function closeModal(){
let modal = document.getElementById("imgModal");
let modalImg = document.getElementById("fullImg");

function closeModal(){
let modal = document.getElementById("imgModal");

modal.style.display = "none";

// scroll wapas on
document.body.style.overflow = "auto";
}

// TYPING EFFECT
const texts = ["Student", "Tech Learner", "Video Editor", "Graphic Designer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === texts.length){
count = 0;
}

currentText = texts[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
setTimeout(type, 1000);
}else{
setTimeout(type, 100);
}

})();


// SMOOTH SCROLL
document.querySelectorAll('nav a').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});

});
});
// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
sections.forEach(sec => {
let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;

if(top >= offset && top < offset + height){
sec.style.opacity = "1";
sec.style.transform = "translateY(0)";
}
});
});
// ACTIVE NAV
let navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
let fromTop = window.scrollY;

navLinks.forEach(link => {
let section = document.querySelector(link.getAttribute("href"));

if(section.offsetTop <= fromTop + 100 &&
section.offsetTop + section.offsetHeight > fromTop){
link.style.color = "#00ffcc";
}else{
link.style.color = "white";
}
});
});
