import './assets/Css/homepage.css';
import './assets/Css/star_background.css';
import './assets/Css/page_question.css';
import './assets/Css/page_result.css';

import {showErrorFetch} from './assets/Js/showErrorFetch.js';
import {responsesParam} from './assets/Js/constant.js';
import {timeModeParam} from './assets/Js/constant.js';
import {QuestionAnswerHandler} from './assets/Js/QuestionAnswerHandler.js';
import './assets/Js/getQuizParam.js';
import './assets/Js/rejouer.js';

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
        let errorParam = "All fields - pseudo, category, difficulty and mode - can not be empty";
        showErrorFetch(errorParam);

    } else {

        document.querySelector('.category').innerText = category;
        document.querySelector('.logoanswer2').innerText = category;
        document.querySelector('#user-pseudo').innerText = localStorage.getItem('pseudo').trim();
    
        let link = ENDPOINT + `?tags=${category}&difficulty=${difficulty}&limit=10`;

        fetch (link, {
            method: 'GET',
            headers: 
                {
                'content-type': 'application/json', 
                'X-api-key': 'q11SR189wd2MALuQhAXEpR3mFRSrBTFSPdvrqqMH'
                }
        })
        .then(async function (response) {

            const data = await response.json();

            if (response.ok) {
                return data;
            }else{
                return Promise.reject(response.status);
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
        .catch(function(error){
            let errorFetch = "Error " + error + " !<br/>Il n'y a pas de données, merci de choisir un autre niveau de difficulté";
            showErrorFetch(errorFetch);
        })
    }
}
