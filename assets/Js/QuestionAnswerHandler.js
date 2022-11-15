import {resultHandler} from './resultHandler.js';
import {loadQuestion} from './loadQuestion.js';
import {answerHandler} from './answerHandler.js';
import {timerAnimation} from './timerAnimation.js';
import {timerAnime} from './timerAnime.js';
import {resetTimer} from './resetTimer.js';

export function QuestionAnswerHandler (questionNumber, data, responsesParam, category, time) {
    
    if (questionNumber > 10) {

        resultHandler(data);
        document.getElementById('page-questions').style.display = "none";
        document.getElementById('page-result').style.display = "block";

    } else {

        loadQuestion(questionNumber, data, responsesParam);
        
        let second = time;
        let timer = setInterval(function() {
            document.querySelector('#timeCount').innerText = second;
            timerAnime(time, second);
            // timerAnimation(second,time);
            second--;
            if (second == -1) {

                if (!localStorage.getItem('Answer_' + questionNumber)) {
                    localStorage.setItem('Answer_' + questionNumber, '');
                }
                
                resetTimer(timer);

                for(let j=0; j<=5; j++) {
                    document.getElementsByClassName('response')[j].classList.remove('response-click');
                }

                questionNumber++;
                QuestionAnswerHandler (questionNumber, data, responsesParam, category, time);
            }

        },1000);

        answerHandler(questionNumber);

        document.querySelector('.question_validate').onclick = function(){
            
            questionNumber++;
            for(let j=0; j<=5; j++) {
                document.getElementsByClassName('response')[j].classList.remove('response-click');
            }
            resetTimer(timer);
            QuestionAnswerHandler (questionNumber, data, responsesParam, category, time);
        }
    }

}