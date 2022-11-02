import './assets/Css/homepage.css';
import './assets/Css/page_question.css';
import './assets/Css/page_result.css';
import './assets/Js/rejouer.js';
import {resultHandler} from './assets/Js/resultHandler.js';
import {loadQuestion} from './assets/Js/loadQuestion.js';
import {answerHandler} from './assets/Js/answerHandler.js';
import {responsesParam} from './assets/Js/constant.js';
import {timeModeParam} from './assets/Js/constant.js';
import './assets/Js/getQuizParam.js';

let commencer = document.getElementById('commencer');
const ENDPOINT = "https://quizapi.io/api/v1/questions";

commencer.onclick = function() {
    
    let category = localStorage.getItem('category');
    let difficulty = localStorage.getItem('difficulty');
    let timeMode = localStorage.getItem('mode');
    let pseudo = localStorage.getItem('pseudo');
    let time = timeModeParam[timeMode];

    if (pseudo == null 
        || category == null || category == 'selected'
        || difficulty == null || difficulty == 'selected'
        || timeMode == null || timeMode == 'selected'
        ) 
    {
        alert ("Pseudo, Category, Difficulty and Mode : can not be empty");

    } else {

        document.querySelector('.category').innerText = category;
        document.querySelector('.logoanswer2').innerText = category;
        document.querySelector('#user-pseudo').innerText = localStorage.getItem('pseudo').trim().toUpperCase();
    
        let link = ENDPOINT + `?tags=${category}&difficulty=${difficulty}&limit=10`;

        fetch (link, {
            method: 'GET',
            headers: 
                {
                'content-type': 'application/json', 
                'X-api-key': 'q11SR189wd2MALuQhAXEpR3mFRSrBTFSPdvrqqMH'
                }
        })
        .then(function (response) {
            if (response.status != 404) {
                return response.json();
            }else{
                reject();
            }
        })
        .then(function (data) {
            
            if (data) {
                document.querySelector('#homepage').style.display = "none";
                document.querySelector('#page-questions').style.display = "block";

                console.log(data);

                let questionNumber = 1;

                QuestionAnswerHandler (questionNumber, data, responsesParam, category, time);
            } 
        })
        .catch(function(err){
            alert ("Il n'y a pas de données, merci de choisir un autre niveau de difficulté");
            console.error(err);
        })
    }
}


function QuestionAnswerHandler (questionNumber, data, responsesParam, category, time) {
    
    if (questionNumber > 10) {

        resultHandler(data);
        document.getElementById('page-questions').style.display = "none";
        document.getElementById('page-result').style.display = "block";

    } else {

        loadQuestion(questionNumber, data, responsesParam);
        
        let second = time;
        let timer = setInterval(function() {
            document.querySelector('.timer div').innerText = second;
            second--;
            if (second == -1) {

                if (!localStorage.getItem('Answer_' + questionNumber)) {
                    localStorage.setItem('Answer_' + questionNumber, '');
                }
                
                clearInterval(timer);

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
            clearInterval(timer);
            QuestionAnswerHandler (questionNumber, data, responsesParam, category, time);
        }
    }

}