let siteLogo = document.querySelectorAll('.logo');
siteLogo[0].classList.add('logo_animation');
siteLogo[1].classList.add('logo_animation');
document.querySelector('.logoanswer1').classList.add('logo_animation');

let pseudoElement = document.getElementById('pseudo');
pseudoElement.onblur = function () {
    window.localStorage.setItem('pseudo', this.value);
}

let categoryElement = document.getElementById('category');
categoryElement.onchange = function () {
    window.localStorage.setItem('category', this.value);
}

let difficultyElement = document.getElementById('difficulty');
difficultyElement.onchange = function () {
    window.localStorage.setItem('difficulty', this.value);
}

let timeModeElement = document.getElementById('mode');
timeModeElement.onchange = function () {
    window.localStorage.setItem('mode', this.value);
}

window.onbeforeunload = function() {
    return 'You want to quit ?';       // value of return is not important(true, false, string), the browser uses his own message to avoid all abuses of alert messages 
};