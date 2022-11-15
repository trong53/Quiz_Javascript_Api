export function imgAnime(img) {
    var imgSpanElement = document.getElementById("gif");

    var imgAnimElement = document.createElement("img");
    imgAnimElement.style.width= "50px";
    imgAnimElement.style.height= "50px";
    imgAnimElement.src = "../assets/img/"+img+".gif";
    
    imgSpanElement.appendChild(imgAnimElement);
}

