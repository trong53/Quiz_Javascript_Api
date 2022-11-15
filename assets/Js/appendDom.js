export function appendDom(key, questions, correct_response, data) {

    let quest = document.createElement('p');
    quest.setAttribute('class', 'p1');
    quest.innerText = (parseInt(key) + 1)  + '/ ' + questions[key];
    document.getElementById('ligne').appendChild(quest);

    let solution = document.createElement('p');
    solution.setAttribute('class', 'p2');
    solution.innerText = 'Réponse '+correct_response[7].toUpperCase() + ' : ' + data[key].answers[correct_response.slice(0, 8)];
    document.getElementById('ligne').appendChild(solution);
}