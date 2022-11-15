let rejouer = document.querySelector('.rejouer');

rejouer.onclick = function(){
    let page_result = document.getElementById('page-result');
    let selected = document.querySelectorAll('#main_homepage select');
    console.log(selected)

    page_result.style.display = "none";
    homepage.style.display = "block";
    
    document.getElementById('pseudo').value = 'Pseudo';

    for (let select=0; select<=2; select++){
        selected[select].value = 'selected';
    }

    document.querySelector('#ligne').innerHTML = '';
    document.getElementById("gif").innerHTML= '';
    localStorage.clear();
}
