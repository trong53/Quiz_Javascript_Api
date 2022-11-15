export function timerAnimation(second,time) {

    document.querySelector('.timecircle').classList.add('circle');
    document.querySelector('.circle').style.animation = 'spin '+time+'s linear infinite';
    if (second < 6){
        document.querySelector('.circle ').style.borderColor="red transparent transparent transparent";
    }else{
        document.querySelector('.circle ').style.borderColor="blue transparent transparent transparent";
    }
    
}