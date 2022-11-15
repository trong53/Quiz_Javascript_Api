import {emojiParam} from './constant.js';

export function showEmoji(selectedEmoji){
    const emojiContainer = document.querySelector('#emoji');

    for (let i = 0; i < 50; i++){
        const confetti = document.createElement('div');
        confetti.innerText = emojiParam[selectedEmoji][Math.floor(Math.random() * emojiParam[selectedEmoji].length)];
        emojiContainer.appendChild(confetti);
    }
    
    animateConfettis(emojiContainer);
}

function animateConfettis(emojiContainer){
    const TLCONF = gsap.timeline()   // librairy GSAP - GreenSock
    TLCONF
    .to('#emoji div', {
        y: "random(-200,500)",
        x:"random(-500,500)",
        z:"random(0,1000)",
        rotation : "random(-90,90)",
        duration: 1.5
    })
    .to('#emoji div',{
        autoAlpha: 0 ,
        duration: 8
    },'=0.2')
    .add(()=> {
        emojiContainer.innerHTML="";
    });
}


