export function showErrorFetch(error) {

    document.querySelector('#homepage').style.opacity = '0.15';
    
    document.querySelector('#fetch404').style.display = 'block';

    document.querySelector('#messageError').innerHTML = error;

    document.querySelector('#closeError').onclick = function () {
        document.querySelector('#fetch404').style.display = 'none';
        document.querySelector('#homepage').style.opacity = '1';
    }
}