function openModal(img){
document.getElementById("imgModal").style.display="block";
document.getElementById("fullImg").src=img.src;
}

function closeModal(){
document.getElementById("imgModal").style.display="none";
}