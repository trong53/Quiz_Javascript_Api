let rejouer = document.querySelector('.rejouer');

rejouer.onclick = function(){
    let page_result = document.getElementById('page-result');
    let selected = document.querySelectorAll('#main_homepage select');

    page_result.style.display = "none";
    homepage.style.display = "block";
    
    document.getElementById('pseudo').value = 'Pseudo';

    for (let select=0; select<=2; select++){
        selected[select].value = 'selected';
    }

    document.querySelector('.containeranswer').innerHTML = '';

    localStorage.clear();
}

