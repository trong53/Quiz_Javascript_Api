import {DOM_Anime} from './DOM_Anime.js';
import {imgAnime} from './imgAnime.js';

export function showResult(score) {
    let delay = 1500;
    
    document.querySelector('.note').innerText = score + '/10';

    if (score <= 2) {
        DOM_Anime(0, delay, 'red', 'Oh my God, ');
        imgAnime('angry');
    }
    else if (score <= 5 && score > 2) {
        DOM_Anime(1, delay, 'orange', 'Dommage, ');
        imgAnime('worried');
    }
    else if (score <= 8 && score > 5) {
        DOM_Anime(2, delay, 'green', 'Bravo ');
        imgAnime('surprised');
    } else {
        DOM_Anime(2, delay, 'green', 'Trop fort !!! ');
        imgAnime('party');
    }

    setTimeout(function(){
        document.getElementById('congrat_mention').style.color = 'white';
        document.querySelector('.note').style.color = 'white';
    },delay+6000);
}