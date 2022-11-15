import { showResult } from "./showResult.js";
import { appendDom } from "./appendDom.js";

export function resultHandler(data) {
    let score = 0, questions = [], correct_response;

    for (const key in data) {

        questions[key] = data[key]['question'];

        for (let answerkey in data[key].correct_answers) {
            if (data[key].correct_answers[answerkey] == 'true') {
                correct_response = answerkey;
            }
        }

        if (correct_response.slice(0, 8) == (window.localStorage.getItem('Answer_' + (parseInt(key) + 1)))) {
            score++;
        } else {
            appendDom(key, questions, correct_response, data)
        }
    }

    showResult(score);
}












/*
export function resultHandler(data) {
    let score = 0;
    let correctResponse;
    let correction = document.querySelector('.containeranswer');

    for (let question = 1 ; question <= 10 ; question++) {
        let stockResponse = localStorage.getItem('Answer_'+question)
            
        for (let answer in data[question-1].correct_answers) {
            if (data[question-1].correct_answers[answer] == 'true') {
                correctResponse = answer.slice(0,8);
            }
        }
        
        if (stockResponse === correctResponse) {
            score++;
        } else {
            let liNode = document.createElement('li');
            correction.appendChild(liNode);

            let spanNode = document.createElement('span');
            spanNode.setAttribute('class', 'ligne');
            spanNode.innerText = `Question ${question}: `;
            liNode.appendChild(spanNode);

            let spanCorrectionNode = document.createElement('span');
            spanCorrectionNode.innerText = 'Réponse '+correctResponse.slice(7).toUpperCase() + ' (' + data[question-1].answers[correctResponse] + ')';
            liNode.appendChild(spanCorrectionNode);
        }
    }
    document.querySelector('.note').innerText = score + '/10';    
}
*/