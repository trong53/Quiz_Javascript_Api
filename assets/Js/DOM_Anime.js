import {showEmoji} from './Emoji.js';

export function DOM_Anime(selectedEmoji, delay, color, mentionText){

    setTimeout(function(){
        showEmoji(selectedEmoji);
        document.getElementById('congrat_mention').style.color = color;
        document.querySelector('.note').style.color = color;
    },delay);

    document.getElementById('congrat_mention').innerText = mentionText;
}