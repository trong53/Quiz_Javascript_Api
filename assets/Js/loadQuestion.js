export function loadQuestion(questionNumber, data, responses) {

    let responsesElement = document.getElementsByClassName('response');

    document.querySelector('.question h2').innerText = 'Question ' + questionNumber;

    document.querySelector('.question p').innerText = data[questionNumber-1].question;

    for (let j=0; j<=5; j++) {
        if (data[questionNumber-1].answers[responses[j][1]] != null) {
            responsesElement[j].style.display = 'block';
            responsesElement[j].innerText = responses[j][0] + '. ' + data[questionNumber-1].answers[responses[j][1]];
        } else {
            responsesElement[j].style.display = 'none';
        }
        
    }
}