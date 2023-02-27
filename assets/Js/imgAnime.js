export function imgAnime(img) {
    let imgSpanElement = document.getElementById("gif_Image_Anime");

    let imgAnimElement = document.createElement("img");
    imgAnimElement.style.width= "50px";
    imgAnimElement.style.height= "50px";
    imgAnimElement.src = "/Quizz/Img/"+img+".gif";
    
    imgSpanElement.appendChild(imgAnimElement);
}

