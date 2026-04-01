// IMAGE MODAL
function openModal(img){
document.getElementById("imgModal").style.display="block";
document.getElementById("fullImg").src=img.src;
}

function closeModal(){
document.getElementById("imgModal").style.display="none";
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