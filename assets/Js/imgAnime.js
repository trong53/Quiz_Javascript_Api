export function imgAnime(img) {
    let imgSpanElement = document.getElementById("gif_Image_Anime");

    let imgAnimElement = document.createElement("img");
    imgAnimElement.style.width= "50px";
    imgAnimElement.style.height= "50px";
    imgAnimElement.src = "../assets/img/"+img+".gif";
    
    imgSpanElement.appendChild(imgAnimElement);
}

