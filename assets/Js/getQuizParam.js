
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