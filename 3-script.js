document.querySelector(".spotify-btn").onclick=function(){

let menu=document.querySelector(".spotify-menu");

if(menu.style.display==="flex"){
menu.style.display="none";
}else{
menu.style.display="flex";
}

}

function openModal(img){
document.getElementById("imgModal").style.display="block";
document.getElementById("fullImg").src=img.src;
}

function closeModal(){
document.getElementById("imgModal").style.display="none";
}