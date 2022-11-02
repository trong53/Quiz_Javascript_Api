export function answerHandler (questionNumber)  {

    let responses = document.getElementsByClassName('response');

    for (let i=0; i<=5; i++) {

        responses[i].onclick = function (event) {
            
            this.classList.add('response-click');
            
            for(let j=0; j<=5; j++) {
                if (j !== i) {
                    responses[j].classList.remove('response-click');
                }
            }
            
            localStorage.setItem('Answer_' + questionNumber, event.target.id); 
        }
    }
    
}