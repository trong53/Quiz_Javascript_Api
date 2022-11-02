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